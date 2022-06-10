import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export default async function LoginHandler(values) {
  const LOGIN_URL = `${API_URL}user/login`
  try{
    await axios.post(LOGIN_URL, values)
    .then(res => {
      // reload page
      window.location.reload()

      // save data to local storage
      localStorage.setItem('id', res.data.data.id)
      localStorage.setItem('name', res.data.data.name)
      localStorage.setItem('username', res.data.data.username)
      localStorage.setItem('email', res.data.data.email)
      localStorage.setItem('role', res.data.data.role)
      localStorage.setItem('position', res.data.data.position)
      localStorage.setItem('image', res.data.data.image)

      // check falid username and password
      if(res.data.logged === true){
        // check role
        alert('Login Success')
        if(res.data.data.role === 'hrd'){
          window.location.href = '/hrd'
        } else if(res.data.data.role === 'manajer'){
          window.location.href = '/manager'
        } else if(res.data.data.role === 'karyawan'){
          window.location.href = '/employee'
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
