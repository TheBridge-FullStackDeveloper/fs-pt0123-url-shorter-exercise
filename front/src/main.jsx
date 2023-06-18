import React from "react";
import ReactDOM from "react-dom/client";
import { Redirect, Switch } from "wouter";
import "./main.css";
import Styled from "./styles";

import Route from "./components/Route";
import Provider from "./context/Provider";
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Register from "./pages/Register";

const Main = () => {
  return (
    <Provider>
      <Styled.Wrapper>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" guarded={true} component={Panel} />
          <Redirect to="/login" />
        </Switch>
      </Styled.Wrapper>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
