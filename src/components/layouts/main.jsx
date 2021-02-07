import { history } from '../../history';
import {
  Link 
} from 'react-router-dom';

import {logout} from '../../services/user.service';
export default function (){
  let user=document.cookie;
  console.log(user)
  return (
    <>
      {
        user==='' && 
        <Link to="/login">signin</Link> &&
        <Link to='/register'>signup</Link>
      }
      {
        user && 
          <Link to='/' onClick={()=>{
            logout()
      }}>logout</Link>
      }

      <h1>Hello World</h1>
    </>
  )
}

