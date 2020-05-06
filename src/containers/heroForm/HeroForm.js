import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// Components
import Button from '../../components/button/Button';
import SelectField from '../../components/selectField/SelectField';
import TextField from '../../components/textField/TextField';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroFormStyles';

const initState = {
  id: '',
  full_name: '',
  type: {
    name: '',
  },
  description: '',
  avatar_url: '',
};

const HeroForm = () => {
  const [formTitle, setFormTitle] = useState('');
  const [hero, setHero] = useState(initState);
  const [typesList, setTypesList] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.includes('edit')) {
      setFormTitle('Edit');
    }

    if (path.includes('add')) {
      setFormTitle('Add');
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

    const itemId = target.getAttribute('data-id');

    setHero({
      ...hero,
      [baseName]: {
        ...hero[baseName],
        id: itemId,
        [nestedName]: value,
      },
    });
  };

  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <Styled.Hero>
      <Styled.Title>{`${formTitle} hero`}</Styled.Title>
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
          <Button color="green" onClick={handleOnClick} type="submit" disabled={buttonDisabled}>Save</Button>
        </>
      )}
    </Styled.Hero>
  );
};

export default HeroForm;
