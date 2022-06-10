import React from 'react'
import Sidebar from '../../../components/fragment/Sidebar/Sidebar'

export default function Dashboard() {
  return (
      <div className='grid grid-cols-10'>
            <div className='col-span-1'><Sidebar /></div>
            <div className='col-span-3'><h1>HALLO</h1></div>
            <div className='col-span-3'><h1>HALLO</h1></div>
            <div className='col-span-3'><h1>HALLO</h1></div>
      </div>
  )
}
