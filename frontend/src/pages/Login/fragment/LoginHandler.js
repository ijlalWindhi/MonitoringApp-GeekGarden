import axios from 'axios';
import {API_URL} from '../../../utils/constants'

import React from 'react'

export default async function LoginHandler(values) {
  // const LOGIN_URL = `${API_URL}user/login`
  const LOGIN_URL = "http://localhost:3030/user/login"
  try{
    await axios.post(LOGIN_URL, values)
    .then(res => {
      if(res.data.logged === true){
        if(res.data.data.role === 'hrd'){
          window.location.href = '/hrd'
        } else if(res.data.data.role === 'manajer'){
          window.location.href = '/manager'
        } else if(res.data.data.role === 'karyawan'){
          window.location.href = '/karyawan'
        }
      } else {
        if(res.data.message === "Invalid Password"){
          alert(res.data.message)
        }else if(res.data.message === "User does not exist"){
          alert(res.data.message)
        }
      }
    })
  } catch(err){
    console.log(err)
  }
}
