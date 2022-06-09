import React from 'react';
import {NavLink} from 'react-router-dom';
import {Home, CreditCard, LogOut} from 'react-feather'

class NavbarOwner extends React.Component {
    out = () => {
        if (window.confirm("Are you sure to logout?")) {
         window.location = '/login'
         localStorage.removeItem("name");
         localStorage.removeItem("user");
         localStorage.removeItem("token");
         localStorage.removeItem("id_user");
         localStorage.removeItem("id_transaksi");
         localStorage.removeItem("id_outlet");
         localStorage.removeItem("role");
        }
       }
    render(){
    return (
        <>
            < nav class = "bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-100" >
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-purple-400">
                        Bersih<span className='text-black'>In</span>.
                    </span>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li className="py-1">
                            <NavLink 
                                to='/'
                                className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                                aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li className="py-1">
                            <NavLink 
                                to='/laporan'
                                className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                                aria-current="page">
                                Laporan
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                        <li>
                            <button
                                type="button"
                                className="bg-purple-400 text-lg text-white px-5 py-2 rounded-2xl"
                                onClick={() => this.out()}
                                >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
    }
  }
  
  export default NavbarOwner;