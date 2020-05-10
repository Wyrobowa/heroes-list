import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import { addHero, editHero } from '../../actions/heroesListActions';

// Components
import Button from '../../components/button/Button';
import Loader from '../../components/loader/Loader';
import SelectField from '../../components/selectField/SelectField';
import TextField from '../../components/textField/TextField';

// Helpers
import { parseData } from '../../helpers/helpers';

// HOC
import ValidationInput from '../../components/validationInput/ValidationInput';
import useValidation from '../../hooks/useValidation';

// Services
import { requester } from '../../services/requestService';

// Styles
import * as Styled from './heroFormStyles';

const initState = {
  full_name: '',
  type: {
    name: '',
  },
  description: '',
  avatar_url: '',
};

const ValidationInputHOC = ValidationInput(TextField);

const HeroForm = ({ addHeroAction, editHeroAction }) => {
  const [hero, setHero] = useState(initState);
  const [typesList, setTypesList] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [fieldsValidation, checkValidation] = useValidation(hero);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getTypes = async () => {
      const data = await requester('http://localhost:4000/types', 'GET');
      setTypesList(data);
    };

    getTypes();
  }, []);

  useEffect(() => {
    setHero(initState);

    if (id) {
      const getHero = async () => {
        const data = await requester(`http://localhost:4000/heroes/${id}`, 'GET');
        setHero(data);
      };

      getHero();
    }
  }, []);

  const checkIfCanBeSaved = () => {
    if (
      hero.avatar_url !== ''
      && hero.full_name !== ''
      && hero.description !== ''
      && hero.type.name !== ''
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    checkIfCanBeSaved();
  }, [hero]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    checkValidation({ target });

    setHero({
      ...hero,
      [name]: value,
    });
  };

  const handleSelectChange = ({ target }) => {
    const { name, value } = target;

    const splitNames = name.split('.');
    const baseName = splitNames[0];
    const nestedName = splitNames[1];

    const itemId = String(target[target.selectedIndex].getAttribute('data-id'));

    setHero({
      ...hero,
      [baseName]: {
        id: itemId,
        [nestedName]: value,
      },
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoadingStatus(true);

    const parsedData = parseData(hero);
    const sendOptions = [
      id ? `http://localhost:4000/heroes/${id}` : 'http://localhost:4000/heroes',
      id ? 'PUT' : 'POST',
      parsedData,
    ];

    const newHero = await requester(...sendOptions);

    if (id) {
      editHeroAction(newHero, id);
    } else {
      addHeroAction(newHero);
    }

    history.push('/');
  };

  return (
    <Styled.Hero>
      <Styled.Title>{`${id ? 'Edit' : 'Add'} hero`}</Styled.Title>
      <Loader loading={loadingStatus} overlay>
        <Styled.HeroAvatar src={hero.avatar_url || 'none'} alt={hero.full_name || ''} />
        <ValidationInputHOC
          labelText="Avatar URL"
          onChange={handleInputChange}
          id="avatar_url"
          value={hero.avatar_url}
          onBlur={checkValidation}
          required
          isValid={fieldsValidation.avatar_url}
        />
        <ValidationInputHOC
          labelText="Full name"
          onChange={handleInputChange}
          id="full_name"
          value={hero.full_name}
          onBlur={checkValidation}
          required
          isValid={fieldsValidation.full_name}
        />
        <SelectField
          id="type.name"
          labelText="Type"
          onChange={handleSelectChange}
          options={typesList}
          selectedValue={hero.type.name}
          typeId={hero.type.id}
        />
        <ValidationInputHOC
          fieldType="textarea"
          labelText="Description"
          onChange={handleInputChange}
          id="description"
          value={hero.description}
          onBlur={checkValidation}
          required
          isValid={fieldsValidation.description}
        />
        <Button
          color="green"
          onClick={handleSubmit}
          type="submit"
          isDisabled={buttonDisabled}
        >
          Save
        </Button>
      </Loader>
    </Styled.Hero>
  );
};

HeroForm.propTypes = {
  addHeroAction: PropTypes.func.isRequired,
  editHeroAction: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    addHeroAction: addHero,
    editHeroAction: editHero,
  },
)(HeroForm);
