import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/App/';
import './index.css';
import { MenuMain, MenuGame } from './containers/Menu/';
import Timer from './containers/Timer/index';
import { Provider } from 'react-redux';
import store from './store/init'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={MenuMain}/>
        <Route path="game/:name" component={MenuGame} />
        <Route path="game/:name/:mode" component={Timer} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
