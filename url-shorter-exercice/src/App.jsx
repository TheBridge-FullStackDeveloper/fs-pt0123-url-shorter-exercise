import './App.css'
import HomePage from './pages/HomePage/index.jsx'
import RegisterPage from './pages/RegisterPage';

import Provider from './context/Provider';

import { Route, Switch, Redirect } from 'wouter';
import PanelPage from './pages/PanelPage';
import Guard from './components/Guard';

function App() {

  return (
    <>

      <h1 className='main-title'>Acorta tu URL en un Click</h1>
      
      <Provider>
        <Switch>

          <Route path="/home"     component={HomePage} />  
          <Route path="/register" component={RegisterPage} />
          {/* <Route path ='/panel'>
            <Guard component={PanelPage}/>
          </Route> */}
          <Route path="/panel" component={PanelPage} />
          
          <Redirect to="/home" />

        </Switch>
      </Provider>


    </>
  )
}

export default App
