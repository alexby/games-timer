import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/App/App';
import './index.css';
import MenuGame from './containers/Menu/Game';
import MenuMain from './containers/Menu/Main.js';
import Timer from './containers/Timer/Timer.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MenuMain}/>
      <Route path="game/:name" component={MenuGame} />
      <Route path="game/:name/:mode" component={Timer} />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
