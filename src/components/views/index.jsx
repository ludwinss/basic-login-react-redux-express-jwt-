import React  from 'react';
import {
  Register,
  Login,
  Hw
} from '../layouts/';

import { history } from '../../history';

import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class Main extends React.Component{
  render(){
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Hw}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Redirect from='*' to='/login'/>
        </Switch>
      </Router>
    )
  }
}

export default Main;
