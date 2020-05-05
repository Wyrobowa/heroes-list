import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// Components
import ModalRoute from './components/modalRoute/ModalRoute';

// Containers
import Hero from './containers/hero/Hero';
import HeroForm from './containers/heroForm/HeroForm';
import HeroesList from './containers/heroesList/HeroesList';

const Routing = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/" component={HeroesList} />
        <Route path="/viewHero/:id" component={Hero} />
        <Route path="/addHero" component={HeroForm} />
      </Switch>

      <ModalRoute background={background} path="/viewHero/:id" component={Hero} />
      <ModalRoute background={background} path="/addHero" component={HeroForm} />
    </>
  );
};

export default Routing;
