import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp';
import { Switch, Route, Redirect } from 'wouter';
import './App.css';
import Signin from './pages/Login';
import Provider from './context/Provider';
import Panel from './pages/Panel';
import Guard from './components/Guard';

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={Signin} />
        <Route path="/">
          <Guard component={Panel} />
        </Route>
        <Redirect to="/signin" />
      </Switch>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

//<Route path="/signin" component={Login} xq se traga esta ruta? />
//<Route path="/panel" component={Panel} />
