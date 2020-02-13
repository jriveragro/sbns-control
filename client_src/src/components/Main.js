import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Clientes from './Clientes';
import About from './About';

const Main = () => (
  <main>
      <Switch>
        <Route exact path="/" component={Clientes} />
        <Route exact path="/about" component={About} />
      </Switch>
  </main>
)

export default Main;
