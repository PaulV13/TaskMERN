import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import { useRegister } from '../../hooks/useRegister'

import './RegisterForm.css'

const RegisterForm = () => {
  const {
    nombre,
    password,
    email,
    nameHandler,
    emailHandler,
    passwordHandler,
    submitHandler,
    errorRegister,
    setErrorRegister,
    message
  } = useRegister()
  const [, setLocation] = useLocation()

  const submitHandlerLoguearse = (e) => {
    e.preventDefault()
    setErrorRegister('')
    setLocation('/')
  }

  useEffect(() => {
    if (message !== '') {
      setLocation('/')
    }
  }, [setLocation, message])

  return (
    <div className="container">
      <form className="form-register">
        <div className="form-field-register">
          <label className="user-register">
            <span className="hidden-register">Name</span>
          </label>
          <input
            value={nombre}
            onChange={nameHandler}
            type="text"
            placeholder="Name"
            className="form-input-register"
          />
        </div>
        <div className="form-field-register">
          <label className="email-register">
            <span className="hidden-register">Email</span>
          </label>
          <input
            value={email}
            onChange={emailHandler}
            type="email"
            placeholder="Email"
            className="form-input-register"
          />
        </div>
        <div className="form-field-register">
          <label className="lock-register">
            <span className="hidden-register">Password</span>
          </label>
          <input
            value={password}
            onChange={passwordHandler}
            type="password"
            placeholder="Password"
            className="form-input-register"
          />
        </div>
        <div>
          {errorRegister ? (
            <section className="errorRegister">{errorRegister}</section>
          ) : (
            ''
          )}
        </div>
        <div className="form-field-register">
          <button onClick={submitHandler} type="submit">
            Sign Up
          </button>
        </div>
        <div className="form-field-register">
          <button onClick={submitHandlerLoguearse} type="submit">
            Return
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
