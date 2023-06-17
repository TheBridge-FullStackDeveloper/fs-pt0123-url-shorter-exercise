import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Redirect, Route, Switch } from "wouter";
import Styled from "./styles";

import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Register from "./pages/Register";

const Main = () => {
  return (
    <Styled.Wrapper>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Panel} />
        <Redirect to="/login" />
      </Switch>
    </Styled.Wrapper>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
