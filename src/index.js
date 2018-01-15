import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import asyncComponent from "./lib/AsyncComponent";
import registerServiceWorker from './lib/registerServiceWorker';

import './styles/index.css';

const Home = asyncComponent(() => import("./components/views/Home"));

render((
  <BrowserRouter basename={'/proc/react-forum/'}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
