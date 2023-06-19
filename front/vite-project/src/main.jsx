import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from '../pages/Register/Register.jsx'
import Login from '../pages/Login/Login.jsx'
import {Route, Switch ,Redirect} from 'wouter'
import Panel from '../pages/Panel/Panel.jsx'
import Provider from './context/provider.jsx'

const Container = () => {
  return (
    <Provider>
    <Switch>
      <Route path='/'component={Register}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Panel'  component={Panel}/>
      <Redirect to = '/'/>
    </Switch>
    </Provider>
  )
}
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Container />
  </React.StrictMode>,
)
