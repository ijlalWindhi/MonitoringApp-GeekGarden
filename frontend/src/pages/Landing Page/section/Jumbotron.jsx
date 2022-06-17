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
        <div className='flex flex-col h-full'>
            <div className='absolute right-0 w-2/5 bg-primary-200 rounded-l-3xl'>
                <h1 className='text-6xl font-bold text-white p-5'>This is all that you need.</h1>
            </div>
            <div className='flex my-auto z-10'>
                <h1 className='text-4xl font-semibold w-1/4'>We help you to remind your task</h1>
                <img src={imageJumbotron} className=""/>
            </div>
            <div>
                <h1 className='text-4xl font-semibold text-right mb-32'>Use times and make money</h1>
            </div>
        </div>
    </div>
  )
}
