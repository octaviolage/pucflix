import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contribuir from './Pages/Contribuir';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/contribuir" component={Contribuir} exact/>
      <Route component={Home} exact />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
