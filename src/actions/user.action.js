import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from '../constants/';

import {history} from '../history';

import {login,register} from '../services/user.service';

function registerAction(user){
  function userRegisterSuccess(user){
    return ({type:USER_REGISTER_SUCCESS,user})
  }
  function userRegisterFailure(error){
    return ({type:USER_REGISTER_FAILURE,error})
  }
  function userRegisterRequest(user){
    return ({type:USER_REGISTER_REQUEST,user})
  }
  return (dispatch=>{
    dispatch(userRegisterRequest(user));
    register(user)
      .then(user=>{
        dispatch(userRegisterSuccess(user.data))
      })
      .catch(error=>{
        dispatch(userRegisterFailure(error.response.data.message))
      })
  })
}
function loginAction(user){
  function userLoginRequest(user){
    return {type:USER_LOGIN_REQUEST,user}
  }
  function userLoginSuccess(user){
    return {type:USER_LOGIN_SUCCESS,user}
  }
  function userLoginFailure(error){
    return {type:USER_LOGIN_FAILURE,error}
  }
  return (dispatch=>{
    dispatch(userLoginRequest(user))
    login(user)
      .then(user=>{
        dispatch(userLoginSuccess(user.data))
        history.push('/');
        document.cookie=user.data.token;
      })
      .catch(error=>{
        dispatch(userLoginFailure(error.response.data.message))
      })
  })
  
}
export { 
  registerAction,
  loginAction
};
