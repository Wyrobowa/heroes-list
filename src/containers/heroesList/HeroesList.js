import React from 'react';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';

const HeroesList = () => {
  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <>
      <Button type="button" color="green" onClick={handleOnClick}>
        <Icon name="plus" />
        Add hero
      </Button>
    </>
  );
};

export default HeroesList;
