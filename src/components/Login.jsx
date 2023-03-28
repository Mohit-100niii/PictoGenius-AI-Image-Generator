import React from 'react'
import { Auth,Provider } from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigator = useNavigate();
    const signIn = () => {
        signInWithPopup(Auth,Provider)
        .then((result) => {
            console.log(result)
            navigator('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>
       <div className="login-page">
        <h1>Login Here!</h1>
        <button  onClick={signIn}className="button">Sign In With Google</button>
       </div>
    </div>
  )
}

export default Login
