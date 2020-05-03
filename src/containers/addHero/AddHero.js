import React, { useState, useEffect } from 'react';

// Components
import Button from '../../components/button/Button';
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

  useEffect(() => {
    setHero(initState);
  }, []);

  const handleChange = ({ target }) => {
    console.log(target);
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
            onChange={handleChange}
            id="avatar_url"
            value={hero.avatar_url}
          />
          <TextField
            labelText="Full name"
            onChange={handleChange}
            id="name"
            value={hero.full_name}
          />
          <TextField
            labelText="Type"
            onChange={handleChange}
            id="type"
            value={hero.type && hero.type.name}
          />
          <TextField
            fieldType="textarea"
            labelText="Description"
            onChange={handleChange}
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
