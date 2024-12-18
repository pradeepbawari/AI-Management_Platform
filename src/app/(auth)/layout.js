import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='container flex justify-center p-4 mt-20'>{children}</div>
  )
}

export default AuthLayout