import Axios from 'axios';
function register(user){
  console.log(user)
  let requestOptions={
    method:'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
    },
    body:{ user }
  }
  return Axios.post('http://localhost:3001/api/signup',  user  )
}

function login(user){
  return Axios.post('http://localhost:3001/api/signin', user )
}
function handlerRes(response){
  return response.data()
    .then(text=>{ return JSON.parse(text) })
}
function logout(){
  document.cookie=''
}

export {
  login,
  register,
  logout
};
