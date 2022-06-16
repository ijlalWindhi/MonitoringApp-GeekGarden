import React from 'react'
import {Home, Clipboard, Folder} from 'react-feather'

export default function EmployeeFeatur() {
  return (
    <div className='h-[50vh] bg-button-100 flex flex-col'>
        <h1 className='text-3xl font-semibold text-center pt-8'>Our Features For Employee</h1>
        <div className='flex justify-evenly pt-24'>
            <div className='w-1/4'>
                <div className='flex flex-row items-center'>
                    <Home width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>Dashboard</h1>
                </div>
                <h2 className='text-lg'>
                In this page, you can see
                how much times you spend
                in a month. Also you can see
                all your project, your recent
                project, and when it deadline.
                The fun section, you can see
                how much you make money.
                </h2>
            </div>
            <div className='w-1/4'>
                <div className='flex flex-row items-center'>
                    <Clipboard width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>Daily Report</h1>
                </div>
                <h2 className='text-lg'>
                In daily report, you have a
                table that contains number,
                date, description of your 
                progress, and action to edit
                your report. Also you can add
                new data by click ‘+add’ button.
                </h2>
            </div>
            <div className='w-1/4'>
                <div className='flex flex-row items-center'>
                    <Folder width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>My Project</h1>
                </div>
                <h2 className='text-lg'>
                In this page, besides being able
                to see all your projects, you can 
                also see specifically what your 
                task are in that project, you can 
                also find out who is on your team, 
                and you can see the percentage 
                of your project progress.
                </h2>
            </div>
        </div>
    </div>
  )
}
