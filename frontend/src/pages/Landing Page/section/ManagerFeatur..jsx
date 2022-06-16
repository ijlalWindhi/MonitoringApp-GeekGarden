import React from 'react'
import {Home, Clipboard, Folder} from 'react-feather'

export default function ManagerFeatur() {
  return (
    <div className='h-[50vh] bg-primary-100-100 flex flex-col'>
        <h1 className='text-3xl font-semibold text-center pt-8'>Our Features For Manager</h1>
        <div className='flex justify-evenly pt-24'>
            <div className='w-1/4'>
                <div className='flex flex-row items-center'>
                    <Home width={40} height={40}/>
                    <h1 className='text-xl ml-3 font-medium'>Dashboard</h1>
                </div>
                <h2 className='text-lg'>
                In this page, you can see
                how much times you spend
                in a month. You can see
                all your project, your recent
                project, and when it deadline.
                Also you can see who is in your
                team, and what their activity.
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
                also see specifically each task of
                your team, you can edit, delete,
                and add their task and give the 
                deadline, and you can see the 
                progress. Of course you can find 
                out who is on your team, and you 
                can see the percentage of your 
                project progress.
                </h2>
            </div>
        </div>
    </div>
  )
}
