import React, { useEffect, useState } from 'react'
import ImageProfile from '../../../assets/image-profile.svg'

export default function CardProfile() {
    const [data, setData] = useState({})
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item'))
        if(data) {
            setData(data)
        }
    }, [])
    return (
        <div className='w-full bg-primary-200 rounded-3xl'>
            <div className='py-10 px-14'>
                <img src={`http://localhost:3030/image/userProfile/${data.image}`} className="mx-auto" alt="profile image"/>
                <div className='text-white text-center font-semibold'>
                    <h2 className='mt-3 text-lg'>Welcome back,</h2>
                    <h1 className='my-3 text-2xl'>{data.name}</h1>
                    <button className='bg-white px-5 py-2 text-primary-200 rounded-2xl'>View Profile</button>
                </div>
            </div>
        </div>
    )
}