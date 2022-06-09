import React, { Component } from 'react'
import axios from 'axios'

import LoginForm from './fragment/LoginForm'
import Image from "../../assets/image-login.svg"
import Logo from "../../assets/logo.svg"

export default class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      user: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    let url = "http://localhost:8080/user/auth"
    axios.post(url, data)
      .then(res => {
        if (res.data.logged === true) {
          let name = res.data.data.nama
          let user = res.data.data
          let token = res.data.token
          let id_user = res.data.data.id_user
          let id_outlet = res.data.data.id_outlet
          let role = res.data.data.role
          let url1 = "http://localhost:8000/transaksi/myclass/" + id_user
          localStorage.setItem("name", name)
          localStorage.setItem("id_user", id_user)
          localStorage.setItem("user", JSON.stringify(user))
          localStorage.setItem("token", token)
          localStorage.setItem("role", role)
          localStorage.setItem("id_outlet", id_outlet)
          axios.get(url1)
            .then(res => {
              this.setState({
                class: res.data.data
              })
              localStorage.setItem("class", JSON.stringify(this.state.class))
            })
            .catch(error => {
              console.log(error)
            })
            window.location = "/"
        }
        else {
          window.alert(res.data.message)
        }
      })
  }
  
  render() {
    return (
      <>
        <div className="h-screen flex bg-primary-100">
          <div className="flex w-1/2 justify-center items-center">
            <LoginForm/>
          </div>
          <div className="flex w-1/2 items-center">
              <img src={Image} alt="image-login" className='w-3/4'/>
          </div>
        </div>
      </>
    )
  }
}