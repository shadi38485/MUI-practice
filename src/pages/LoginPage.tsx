import React from 'react'
import SignIn from '../components/auth/SignIn'
import AuthLayout from '../Layouts/AuthLayout'

const LoginPage = () => {
  return (
    <AuthLayout>
      <SignIn/>
    </AuthLayout>
  )
}

export default LoginPage