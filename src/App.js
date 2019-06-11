import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import routes from './router';
import './assets/iconfont/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const router = routes.map((route, key) => {
    return route.exact ? <Route exact path={route.path} key={key} component={route.component}/> : <Route path={route.path} key={key} component={route.component}/>
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {router}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
