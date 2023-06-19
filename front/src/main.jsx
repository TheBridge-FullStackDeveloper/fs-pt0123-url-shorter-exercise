import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from './context/Provider';
import Login from './pages/Login';
import Panel from './pages/Panel';
import { Switch, Route, Redirect } from 'wouter';

const Main = () => {
  return (
  <Provider>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Panel} />
      <Redirect to="/Login" />
    </Switch>
  </Provider>    
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
