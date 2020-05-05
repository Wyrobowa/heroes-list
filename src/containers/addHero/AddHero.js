import React, { useState, useEffect } from 'react';

// Components
import Button from '../../components/button/Button';
import SelectField from '../../components/selectField/SelectField';
import TextField from '../../components/textField/TextField';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './addHeroStyles';

const initState = {
  id: '',
  full_name: '',
  type: {
    name: '',
  },
  description: '',
  avatar_url: '',
};

const AddHero = () => {
  const [hero, setHero] = useState(initState);
  const [typesList, setTypesList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:4000/types');
      setTypesList(data);
    };

    getData();
  }, []);

  useEffect(() => {
    setHero(initState);
  }, []);

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

    const id = target.getAttribute('data-id');

    setHero({
      ...hero,
      [baseName]: {
        ...hero[baseName],
        id,
        [nestedName]: value,
      },
    });
  };

  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <Styled.Hero>
      <Styled.Title>Add hero</Styled.Title>
      {hero && (
        <>
          <Styled.HeroAvatar src="none" alt="" />
          <TextField
            labelText="Avatar URL"
            onChange={handleInputChange}
            id="avatar_url"
            value={hero.avatar_url}
          />
          <TextField
            labelText="Full name"
            onChange={handleInputChange}
            id="full_name"
            value={hero.full_name}
          />
          <SelectField
            id="type.name"
            onChange={handleSelectChange}
            options={typesList}
            selectedValue={hero.type.name}
          />
          <TextField
            fieldType="textarea"
            labelText="Description"
            onChange={handleInputChange}
            id="description"
            value={hero.description}
          />
          <Button color="green" onClick={handleOnClick} type="submit">Save</Button>
        </>
      )}
    </Styled.Hero>
  );
};

export default AddHero;
