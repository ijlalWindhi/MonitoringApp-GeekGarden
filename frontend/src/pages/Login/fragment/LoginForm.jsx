import {useState} from 'react'
import {useForm} from 'react-hook-form'
import loginHandler from './LoginHandler'
import axios from 'axios'

import Logo from '../../../assets/logo.svg'

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit} = useForm();    

    const submitHandler = async (values) => {
        await loginHandler(values);
    };

    // const handleChange = (e) => {
    //     setUsername({
    //       [e.target.name]: e.target.value
    //     })
    // }
    
    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     let data = {
    //         username: username,
    //         password: password
    //     }
    //     let url = "http://localhost:3030/user/login"
    //     axios.post(url, data)
    //         .then(res => {
    //         if (res.data.logged === true) {
    //             let name = res.data.data.nama
    //             let user = res.data.data
    //             let token = res.data.token
    //             let id_user = res.data.data.id_user
    //             let id_outlet = res.data.data.id_outlet
    //             let role = res.data.data.role
    //             let url1 = "http://localhost:8000/transaksi/myclass/" + id_user
    //             localStorage.setItem("name", name)
    //             localStorage.setItem("id_user", id_user)
    //             localStorage.setItem("user", JSON.stringify(user))
    //             localStorage.setItem("token", token)
    //             localStorage.setItem("role", role)
    //             localStorage.setItem("id_outlet", id_outlet)
    //             axios.get(url1)
    //             .then(res => {
    //                 this.setState({
    //                 class: res.data.data
    //                 })
    //                 localStorage.setItem("class", JSON.stringify(this.state.class))
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //             window.location = "/"
    //         }
    //         else {
    //             window.alert(res.data.message)
    //         }
    //         })
    // }

    return (
        <div>
            <img src={Logo} alt="logo"  className='absolute top-10'/>
            <h1 className="font-semibold text-3xl mb-10">Login</h1>
            <form method='POST' onSubmit={handleSubmit(async (values) => {
                await submitHandler(values);
            })}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className="text-md flex-1 block w-96 border-1 focus:border-button-100 border-input-100 text-input-200 rounded-xl px-6 py-4 bg-primary-100"
                    placeholder="username"
                    {...register("username", { required: true })}
                />
                <label className='text-red-500 block'>{errors.username?.type === 'required' && "Please fill your username"}</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="text-md flex-1 block w-96 border-1 border-input-100 text-input-200 rounded-xl px-6 py-4 bg-primary-100 mt-3"
                    placeholder="password"
                    {...register("password", { required: true })}
                />
                <label className='text-red-500 block'>{errors.password?.type === 'required' && "Please fill your password"}</label>
                <button
                    type="submit"
                    className="justify-center block mt-8 w-96 py-4 px-6 rounded-xl text-lg font-medium drop-shadow-lg text-black bg-button-100 hover:bg-button-200">
                    Login
                </button>
                <h1 className='mt-3 text-center'>Don't have an account?
                    <a href="https://api.whatsapp.com/send?phone=6281334666364" target="_blank" rel="noopener noreferrer">
                        <span className='text-text-200'>Request Now</span>
                    </a>
                </h1>
            </form>
        </div>
    );
}