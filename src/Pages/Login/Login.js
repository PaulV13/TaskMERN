import React, { useEffect, useCallback } from 'react'
import useLocation from 'wouter/use-location'

import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  const [, setLocation] = useLocation()
  
  useEffect(
    useCallback(() => {
      if (localStorage.getItem('token') !== null) {
        setLocation('/Home')
      }
    }, [setLocation]),
    [setLocation]
  )

  return <LoginForm />
}
export default Login
