import React from 'react'
import {Home, Clipboard, Folder, Users, Clock, User} from 'react-feather'

export default function HRDFeatur() {
  return (
    <div className='h-[80vh] bg-button-100 flex flex-col'>
        <h1 className='text-3xl font-semibold text-center pt-8'>Our Features For HRD</h1>
        <div className='flex justify-evenly pt-24'>
            <div className='w-64 h-48 bg-white rounded-lg'>
                <div className='flex flex-col items-center py-16'>
                    <Home width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>Dashboard</h1>
                </div>
            </div>
            <div className='w-64 h-48 bg-white rounded-lg'>
                <div className='flex flex-col items-center py-16'>
                    <Clipboard width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>Daily Report</h1>
                </div>
            </div>
            <div className='w-64 h-48 bg-white rounded-lg'>
                <div className='flex flex-col items-center py-16'>
                    <Folder width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>My Project</h1>
                </div>                
            </div>
        </div>
        <div className='flex justify-evenly pt-24'>
            <div className='w-64 h-48 bg-white rounded-lg'>
                <div className='flex flex-col items-center py-16'>
                    <Users width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>List Employee</h1>
                </div>
            </div>
            <div className='w-64 h-48 bg-white rounded-lg'>
                <div className='flex flex-col items-center py-16'>
                    <Clock width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>Project</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
