import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protected-route';

import HomePage from './views/Homepage.view';
import Ingredients from './views/Ingredients.view';
import UpdateIngredientForm from './components/UpdateIngredientForm/UpdateIngredientForm.component';
import Nav from './components/Nav/Nav.component';

import { Dimmer, Grid, Loader } from 'semantic-ui-react';

import './App.css';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Dimmer active><Loader size="huge">Loading...</Loader></Dimmer>
  }
  
  return (
    <>
    <Nav />
    <Grid columns={1}>
    <Grid.Row>
    <Grid.Column>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <ProtectedRoute path='/ingredients' component={Ingredients} />
      <ProtectedRoute Route path="/updateIngredient/:id" component={UpdateIngredientForm} />
      </Switch>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </>
  );
}

export default App;
