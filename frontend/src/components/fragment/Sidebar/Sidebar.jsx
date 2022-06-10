import React from 'react'
import {NavLink} from 'react-router-dom'
import {Home, Clipboard, Folder, LogOut} from 'react-feather'
import Logout from './fragment/LogoutHandler'

export default function Sidebar() {
  return (
    <div className="fixed md:h-screen shadow-lg w-[8%] rounded-r-3xl bg-primary-200">
        <section className="md:col-span-1">
            <div>
                <ul className='mx-auto'>
                    <li className='mt-10'>
                        <NavLink to="/employee" activeClassName="active" className="flex items-center p-4 text-base font-normal">
                            <Home width={35} height={35} className="text-white mx-auto text-xl" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/employee" activeClassName="active" className="flex items-center p-4 text-base font-normal">
                            <Clipboard width={35} height={35} className="text-white mx-auto text-xl" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/employee" activeClassName="active" className="flex items-center p-4 text-base font-normal">
                            <Folder width={35} height={35} className="text-white mx-auto text-xl" />
                        </NavLink>
                    </li>
                    
                </ul>
                <button className='absolute bottom-20 ml-10' onClick={Logout}>
                    <LogOut width={35} height={35} className='text-white mx-auto text-xl'/>
                </button>
            </div>
        </section>
    </div>
  )
}
