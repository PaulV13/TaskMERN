import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { useLocation } from 'wouter'
import { useLogin } from '../../hooks/useLogin'
import { useRegister } from '../../hooks/useRegister'
import { loginGoogle } from '../../services/loginGoogle'

import './LoginForm.css'

const Login = () => {
  const { emailHandler, passwordHandler, submitHandler, password, email, errorLogin, setErrorLogin, jwt, setJWT} = useLogin()
  const [, setLocation] = useLocation()
  const { message, setMessage }  = useRegister()

  useEffect(() => {
    if (jwt !== null) {
      setLocation('/Home')
    }
  }, [setLocation, jwt])

  useEffect(() => {
    if (message !== '' || errorLogin !== '') {
      setTimeout(function () {
        setMessage('')
        setErrorLogin('')
      }, 1500)
    }
  }, [message, setMessage, errorLogin,setErrorLogin])

  const submitHandlerRegister = (e) => {
    e.preventDefault()
    setErrorLogin('')
    setLocation('/Register')
  }
  
  const responseSuccesGoogle = (response) => {
    loginGoogle(response)
      .then((response) => {
        const token = response.token
        setJWT(token)
        localStorage.setItem('name', response.user.name)
        localStorage.setItem('id', response.user._id)
        localStorage.setItem('token', token)
      })
  }

  const responseErrorGoogle = (response) => {
    console.log(response)
  }

  return (
    <div className="container">
      <form className="form-login">
        <div className="form-field-login">
          <label className="email-login">
            <span className="hidden-login">Email</span>
          </label>
          <input
            id="login-username"
            value={email}
            onChange={emailHandler}
            type="text"
            placeholder="Email"
            className="form-input-login"
            autoFocus
          />
        </div>
        <div className="form-field-login">
          <label className="lock-login">
            <span className="hidden-login">Password</span>
          </label>
          <input
            value={password}
            onChange={passwordHandler}
            type="password"
            placeholder="Password"
            className="form-input-login"
          />
        </div>
        <div>
          {errorLogin ? (
            <section className="errorLogin">{errorLogin}</section>
          ) : (
            ''
          )}
        </div>
        <div className="form-field-login">
          <button onClick={submitHandler} type="submit">
            Log In
          </button>
        </div>
        <div className="form-field-login">
          <button onClick={submitHandlerRegister} type="submit">
            Sign Up
          </button>
        </div>
        <div className="form-field-login">
          <GoogleLogin
            className="google-button"
            clientId="214450983443-eh2muv5nhvkk9q0r0l5rjmo4absmsjmv.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseSuccesGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        {message ? <section className="errorLogin">{message}</section> : ''}
      </form>
    </div>
  )
}

export default Login
