import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// Actions
import PropTypes from 'prop-types';
import * as actions from '../../actions/heroesListActions';

// Components
import Button from '../../components/button/Button';
import SelectField from '../../components/selectField/SelectField';
import TextField from '../../components/textField/TextField';

// Helpers
import { parseData } from '../../helpers/helper';

// Services
import { fetchData, sendData } from '../../services/requestService';

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

const HeroForm = ({ addHeroesListAction, editHeroesListAction }) => {
  const [formType, setFormType] = useState('');
  const [hero, setHero] = useState(initState);
  const [typesList, setTypesList] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const path = location.pathname;

    if (path.includes('edit')) {
      setFormType('Edit');
    }

    if (path.includes('add')) {
      setFormType('Add');
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:4000/types');
      setTypesList(data);
    };

    getData();
  }, []);

  useEffect(() => {
    setHero(initState);

    if (id) {
      const getData = async () => {
        const data = await fetchData(`http://localhost:4000/heroes/${id}`);
        setHero(data);
      };

      getData();
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

    const parsedData = parseData(hero);
    const sendOptions = [
      formType === 'Add' ? 'http://localhost:4000/heroes' : `http://localhost:4000/heroes/${id}`,
      formType === 'Add' ? 'POST' : 'PUT',
      parsedData,
    ];

    const newHero = await sendData(...sendOptions);

    if (formType === 'Add') {
      addHeroesListAction(newHero);
    } else {
      editHeroesListAction(newHero, id);
    }

    history.push('/');
  };

  return (
    <Styled.Hero>
      <Styled.Title>{`${formType} hero`}</Styled.Title>
      {hero && (
        <>
          <Styled.HeroAvatar src={hero.avatar_url || 'none'} alt={hero.full_name || ''} />
          <TextField
            labelText="Avatar URL"
            onChange={handleInputChange}
            id="avatar_url"
            value={hero.avatar_url}
            className="heroForm__field"
          />
          <TextField
            labelText="Full name"
            onChange={handleInputChange}
            id="full_name"
            value={hero.full_name}
            className="heroForm__field"
          />
          <SelectField
            id="type.name"
            labelText="Type"
            onChange={handleSelectChange}
            options={typesList}
            selectedValue={hero.type.name}
            typeId={hero.type.id}
            className="heroForm__field"
          />
          <TextField
            fieldType="textarea"
            labelText="Description"
            onChange={handleInputChange}
            id="description"
            value={hero.description}
            className="heroForm__field"
          />
          <Button
            color="green"
            onClick={handleSubmit}
            type="submit"
            disabled={buttonDisabled}
          >
            Save
          </Button>
        </>
      )}
    </Styled.Hero>
  );
};

HeroForm.propTypes = {
  addHeroesListAction: PropTypes.func.isRequired,
  editHeroesListAction: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    addHeroesListAction: actions.addHeroesList,
    editHeroesListAction: actions.editHeroesList,
  },
)(HeroForm);
