import React from 'react'
import Sidebar from '../../../components/fragment/Sidebar/Sidebar'
import LeftSection from './section/LeftSection'
import MiddleSection from './section/MiddleSection'
import RightSection from './section/RightSection'

export default function Dashboard() {
  return (
    <div className='bg-primary-100 h-screen'>
      <Sidebar />
      <div className='grid grid-cols-12 gap-x-5 mx-24 pt-3'>
        <div className='col-span-1'></div>
        <div className='col-span-4 flex items-end'>
          <LeftSection/>
        </div>
        <div className='col-span-3 flex items-center'>
          <MiddleSection/>
        </div>
        <div className='col-span-4 flex items-end justify-center'>
          <RightSection/>
        </div>
      </div>
    </div>
  )
}
