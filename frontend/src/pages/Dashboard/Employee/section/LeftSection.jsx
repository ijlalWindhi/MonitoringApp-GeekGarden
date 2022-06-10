import React from 'react'

// import components
import CardProfile from '../../../../components/fragment/Card Profile/CardProfile'
import CardDeadline from '../../../../components/fragment/Card Deadline/CardDeadline'

// import assets
import Logo from "../../../../assets/logo.svg"

export default function LeftSection() {
  return (
    <div>
      <img src={Logo} alt="logo"/>
      <h1 className='text-4xl font-medium my-3'>My Dashboard</h1>
      <CardProfile/>
      <h1 className='text-2xl font-medium mt-5 mb-3'>Deadline is coming!!</h1>
      <CardDeadline/>
    </div>
  )
}
