import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS
} from '../constants/';

const registation=(state={},action)=>{
  switch(action.type){
    case(USER_REGISTER_REQUEST):
      return {registering:true}
    case(USER_REGISTER_SUCCESS):
      return {registering:false,user:action.user}
    case(USER_REGISTER_FAILURE):
      return {registering:false,error:action.error}
    default: return state
  }
}


export default registation;
