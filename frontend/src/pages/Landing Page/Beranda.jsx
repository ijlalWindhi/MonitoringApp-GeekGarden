import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NavbarOwner from '../../components/NavbarOwner';
import NavbarKasir from '../../components/NavbarKasir';
import Image from '../../assets/image-landingPage.webp'

class Beranda extends React.Component {
    constructor() {
        super()
        this.state = {
          token: "",
          username: "",
          userId: 0,
          role: ""
        }
    
        if (localStorage.getItem('token')) {
            this.state.role = localStorage.getItem('role')
            this.state.token = localStorage.getItem('token')
            this.state.username = localStorage.getItem('name')
            this.state.id_outlet = localStorage.getItem('id_outlet')
        } 
        else {
          window.location = "/login"
        }
    
      }

    render(){
        return(
            <div className=''>
            {this.state.role == "kasir" &&
                <NavbarKasir></NavbarKasir>
            }
            {this.state.role == "owner" &&
                <NavbarOwner></NavbarOwner>
            }
            {this.state.role == "admin" &&
                <Navbar className="col-span-1"></Navbar>
            }

            <div className='flex flex-col justify-center mx-auto'>
                <div>
                    <img src={Image} className="w-1/3 mx-auto mt-10"/>
                </div>
                <div className='text-center text-3xl font-bold'>
                    <h1>Hi <span className='text-purple-400'>{this.state.username}</span></h1>
                    <h2>Now You Login in <span className='text-purple-400'>{this.state.role}</span></h2>
                </div>
                <div className='mx-auto mt-10'>
                    {this.state.role == "owner" &&
                        <NavLink to='/laporan' className="px-5 py-3 rounded-full bg-purple-400 text-xl text-white" type="submit">Make a Report Transaction 
                        </NavLink>
                    }
                    {this.state.role == "admin" &&
                        <NavLink to='/transaksi' className="px-5 py-3 rounded-full bg-purple-400 text-xl text-white" type="submit">Let's Start 
                        </NavLink>
                    }
                    {this.state.role == "kasir" &&
                        <NavLink to='/transaksi' className="px-5 py-3 rounded-full bg-purple-400 text-xl text-white" type="submit">Let's Start 
                        </NavLink>
                    }
                </div>
            </div>
            </div>
        )
    }
}

export default Beranda;