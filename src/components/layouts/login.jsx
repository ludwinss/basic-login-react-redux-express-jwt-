import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../themes/bodyStyle';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';
import {
  Route,
  Link
} from 'react-router-dom';

import {connect} from 'react-redux';
import {loginAction} from '../../actions/user.action';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      user:{
        email:'',
        password:''
      }
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  };

  handleChange(e){
    let {user}=this.state;
    this.setState({
      user:{
        ...user,
        [ e.target.id ]:e.target.value
      }
    })
  }
  handleSubmit(){
    this.props.loginAction(this.state.user)
  }
  render(){
    const {classes}=this.props;
    const {authentication} = this.props;
    return (<>
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <h2>Login Standar</h2>
          <TextField
            id="email"
            className={classes.textField}
            label='email'
            onChange={this.handleChange}
          />
          <TextField
            id='password'
            className={classes.textField}
            label='password'
            onChange={this.handleChange}
          />
        {
          authentication.error!==undefined && <h4>{ authentication.error }</h4> 
        }

        {
          authentication.user!==undefined && <h4>{ authentication.user.message }</h4> 
        }
        <Button onClick={this.handleSubmit}>
          Submit
        </Button>
          <Link to='/register' >Registrate</Link>
        </FormControl>
      </div>
      {this.state.email}
      <p>{this.state.password}</p>
      </>);
  }
}
function mapState(state){
  const {authentication} =state
  return{
    authentication
  }
}

const mapAction={
  loginAction
}

const connectedLogin=connect(mapState,mapAction) (Login);

export default withStyles (styles)(connectedLogin);
