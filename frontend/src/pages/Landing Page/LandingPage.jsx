import React from 'react'
import Jumbotron from './section/Jumbotron'
import EmployeeFeatur from './section/EmployeeFeatur'
import ManagerFeatur from './section/ManagerFeatur.'
import HRDFeatur from './section/HRDFeatur'

export default function LandingPage() {
  return (
    <>
        <div className='bg-primary-100'>
            <Jumbotron/>
            <EmployeeFeatur/>
            <ManagerFeatur/>
            <HRDFeatur/>
        </div>
    </>
  )
}
