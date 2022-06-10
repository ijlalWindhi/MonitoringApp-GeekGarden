import React from 'react'

export default function Timer() {
  return (
    <div className='bg-primary-200 px-5 py-8 rounded-3xl'>
        <div className='flex justify-around'>
            <button className='px-4 py-2 bg-green-600 text-white rounded-xl'>start</button>
            <button className='px-4 py-2 bg-red-500 text-white rounded-xl'>stop</button>
        </div>
        <div className='mt-3'>
            <h1 className='text-white text-5xl'>00 : 00 : 01</h1>
        </div>
    </div>
  )
}
