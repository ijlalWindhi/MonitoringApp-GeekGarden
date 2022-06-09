import React from 'react'
import LoginForm from './fragment/LoginForm'
import Image from "../../assets/image-login.svg"

export default function Login() {
  return (
    <div className="h-screen flex bg-primary-100">
      <div className="flex w-1/2 justify-center items-center">
        <LoginForm/>
      </div>
      <div className="flex w-1/2 items-center">
          <img src={Image} alt="image-login" className='w-3/4'/>
      </div>
    </div>
  )
}