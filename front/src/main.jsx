import React from 'react'
import ReactDOM from 'react-dom'
import Guard from './components/Guard';
import { Provider } from './context/Provider';
import { Route, Switch, Redirect, Link, useRoute } from "wouter";
import Register from "./pages/Register"
import Panel from "./pages/Panel"
import Login from "./pages/Login"



const CustomLink = ({ href, children }) => {

  const [isActive] = useRoute(href)

  return (
    <Link {...{ href }}>
      <a {...{ href }}>{children}</a>
    </Link>
  )
}

const Container = () => {
  return (
    <div>
      <nav>
        <CustomLink href="/register">Register</CustomLink>
        <CustomLink href="/Login">Login</CustomLink>
        <CustomLink href="/Panel">Panel</CustomLink>
      </nav>
      <Provider>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Panel" component={Panel} />
          <Redirect to="/register" />
        </Switch>
      </Provider>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)
