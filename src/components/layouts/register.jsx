import React from 'react';
import {
  FormControl,
  Button,
  TextField
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import styles from '../../themes/registerStyle';
import register from '../../services/user.service';

import { registerAction } from '../../actions/user.action';
import {connect} from 'react-redux';

class Register extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user:{
        email:'',
        password:'',
        rol:[ 'client','adminstrator']
      }
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleInput(e){
    const {id,value}=e.target;
    const {user}=this.state;
    this.setState( {
      user:{
        ...user,
        [id]:value
      }
    })
  }
  handleSubmit(e){
    e.preventDefault();
    let user=this.state.user;
    this.props.registerAction(user);
  }
  render(props){
    const { classes }=this.props;
    const {registration}=this.props;
    return (
      <FormControl className={classes.root}>
        <h3>Registrate! Coño</h3>
        <TextField 
          id='email'
          label='email'
          placeholder='example@gmail.com'
          className={classes.textfield}
          onChange={this.handleInput}
        />
        <TextField 
          id='password'
          label='password'
          className={classes.textfield}
          onChange={this.handleInput}
        />
        {registration.error && <h4>{ registration.error }</h4>}
        {registration.user && <h4>{registration.user.message}</h4>}
        <Button 
          onClick={this.handleSubmit}
          className={classes.button}
        >Registrate</Button>
      </FormControl>
    )
  };
}

function mapState(state){
  const {registration} =state
    return{
      registration
    }
}
const mapAction={
  registerAction
}

const connectedRegisterPage=connect(mapState,mapAction)(Register);

export default  withStyles(styles)( connectedRegisterPage );
