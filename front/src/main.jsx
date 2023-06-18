import React from 'react';
import ReactDOM from 'react-dom/client';


import Login from './pages/Login';
import Panel from './pages/Panel';
import { Switch, Route, Redirect } from 'wouter';

const Main = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Panel} />
      <Redirect to="/Login" />
    </Switch>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
