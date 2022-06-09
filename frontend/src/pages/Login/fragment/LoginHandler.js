import axios from 'axios';
import {API_URL} from '../../../utils/constants'

export default async function LoginHandler(values) {
  const LOGIN_URL = `${API_URL}user/login`
  try{
    await axios.post(LOGIN_URL, values)
    .then(res => {
      window.location.reload()
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
