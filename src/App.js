import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import routes from './router';
import './assets/iconfont/style.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  const router = routes.map((route, key) => {
    return route.exact ? <Route exact path={route.path} key={key} component={route.component}/> : <Route path={route.path} key={key} component={route.component}/>
  });
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          {router}
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
