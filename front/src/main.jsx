import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, Redirect, Link, useRoute } from "wouter";
import Register from "./pages/Register"



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
        <CustomLink href="/register">Register</CustomLink>
        <CustomLink href="/register">Register</CustomLink>
      </nav>
      <Switch>
       
        <Route path="/register" component={Register} />
        <Redirect to="/register" />
      </Switch>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
)
