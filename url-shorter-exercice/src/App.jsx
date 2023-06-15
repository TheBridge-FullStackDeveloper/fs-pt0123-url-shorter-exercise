import './App.css'
import HomePage from './pages/HomePage/index.jsx'
import RegisterPage from './pages/RegisterPage';

import { Route, Switch, Redirect } from 'wouter';

function App() {

  return (
    <>

      <h1 className='main-title'>Acorta tu URL en un Click</h1>

      <Switch>

        <Route path="/home"     component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        
        <Redirect to="/home" />

      </Switch>


    </>
  )
}

export default App
