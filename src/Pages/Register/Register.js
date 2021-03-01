import React, { useEffect, useCallback} from 'react'
import useLocation from 'wouter/use-location'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

import './Register.css'

const Register = () => {
  const [, setLocation] = useLocation()

  useEffect(
    useCallback(() => {
      if (localStorage.getItem('token') !== null) {
        setLocation('/Home')
      }
    }, [setLocation]),
    [setLocation]
  )

  return <RegisterForm />
}

export default Register
