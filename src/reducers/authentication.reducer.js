import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
} from '../constants/';

const authentication=(state={},action)=>{
  switch(action.type){
    case(USER_LOGIN_REQUEST):
      return {user:action.user}
    case(USER_LOGIN_FAILURE):
      return {error:action.error}
    case(USER_LOGIN_SUCCESS):
      return {user:action.user}
    default:return state
  }
}

export default authentication;
