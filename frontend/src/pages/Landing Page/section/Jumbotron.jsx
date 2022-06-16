import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
import imageJumbotron from '../../../assets/image-landingPage.png'

export default function Jumbotron() {
  return (
    <div className='h-screen'>
        <nav className='flex items-center justify-between mx-10'>
            <img src={Logo}/>
            <Link to="/login"><h1 className='font-semibold text-lg text-black'>Login</h1></Link>
        </nav>
        <div className='flex flex-col'>
            <div className=''>
                <h1>This is all that you need.</h1>
            </div>
            <div className='flex items-center justify-center my-auto'>
                <h1 className='text-4xl font-semibold w-1/4'>We help you to remind your task</h1>
                <img src={imageJumbotron} className="my-auto"/>
            </div>
            <div>
                <h1 className='text-4xl font-semibold text-right'>Use times and make money</h1>
            </div>
        </div>
    </div>
  )
}
