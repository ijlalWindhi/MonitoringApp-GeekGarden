import React from 'react';
import {NavLink} from 'react-router-dom';
import { ShoppingCart } from 'react-feather';

class Navbar extends React.Component {
    out = () => {
        if (window.confirm("Are you sure to logout?")) {
         window.location = '/login'
         localStorage.removeItem("name");
         localStorage.removeItem("user");
         localStorage.removeItem("token");
         localStorage.removeItem("id");
         localStorage.removeItem("role");
         localStorage.removeItem("id_user");
         localStorage.removeItem("id_transaksi");
         localStorage.removeItem("id_outlet");
        }
       }
    render(){
    return (
        <>
          < nav class = "bg-white shadow-md border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-100" >
            <div class="container flex flex-wrap justify-between items-center mx-auto">
              <div class="flex items-center">
                  <span class="self-center text-xl font-semibold whitespace-nowrap text-purple-400">
                      Skuy<span className='text-black'>Laundry</span>.
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
                              to='/outlet'
                              className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                              aria-current="page">
                              Outlet
                          </NavLink>
                      </li>
                      <li className="py-1">
                          <NavLink 
                              to='/paket'
                              className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                              aria-current="page">
                              Paket
                          </NavLink>
                      </li>
                      <li className="py-1">
                          <NavLink 
                              to='/user'
                              className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                              aria-current="page">
                              User
                          </NavLink>
                      </li>
                      <li className="py-1">
                          <NavLink 
                              to='/member'
                              className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                              aria-current="page">
                              Member
                          </NavLink>
                      </li>
                      <li className="py-1">
                          <NavLink 
                              to='/transaksi'
                              className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                              aria-current="page">
                              Transaksi
                          </NavLink>
                      </li>
                  </ul>
              </div>
              <div>
                <ul className='flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                    <li className="py-1">
                        <NavLink 
                            to='/cart'
                            className="block py-2 px-2 text-lg rounded md:bg-transparent font-medium md:p-0 dark:text-white hover:text-purple-400"
                            aria-current="page">
                            <ShoppingCart/>
                        </NavLink>
                    </li>
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
  
  export default Navbar;