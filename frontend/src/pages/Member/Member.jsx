import React from 'react';
import Navbar from '../../components/Navbar'
import NavbarKasir from '../../components/NavbarKasir';
import NavbarOwner from '../../components/NavbarOwner';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import {Edit, Trash} from 'react-feather'

class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      member: [],
      isModalOpen: false,
      token: "",
      id_member: 0,
      nama: "",
      alamat: "",
      jenis_kelamin: "",
      tlp: "",
      search: "",
      isModalPw: false,
      action: ""

    }
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === "admin" || localStorage.getItem('role') === "kasir") {
        this.state.role = localStorage.getItem('role')
        this.state.token = localStorage.getItem('token')
        this.state.userName = localStorage.getItem('name')
      } else {
        window.alert("You are not an admin")
        window.location = '/login'
      }
    } 
    else {
      window.location = "/login"
    }
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` }
    }
    return header
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFile = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }

  handleClose = () => {
    this.setState({
      isModalOpen: false,
      isModalPw: false,
    })
  }

  getMember = () => {
    let url = 'http://localhost:8080/member/'
    axios.get(url, this.headerConfig())
      .then(res => {
        this.setState({
          member: res.data.member
        })
        console.log(this.state.member)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleEdit = (item) => {
    let url = "http://localhost:8080/member/" + item.id_member
    axios.get(url)
      .then(res => {
        this.setState({
          isModalOpen: true,
          nama: item.nama,
          alamat: item.alamat,
          jenis_kelamin: item.jenis_kelamin,
          tlp: item.tlp,
          id_member: item.id_member,
          action: "update"
        })
      })
      .catch(error => {
        console.log(error)
      })

  }

  handleAdd = () => {
    this.setState({
      isModalOpen: true,
      nama: "",
      alamat: "",
      jenis_kelamin: "",
      tlp: "",
      action: "insert"
    })
  }

  handleSave = e => {
    e.preventDefault()
    let form = {
      id_admin: this.state.id_admin,
      nama: this.state.nama,
      alamat: this.state.alamat,
      jenis_kelamin: this.state.jenis_kelamin,
      tlp: this.state.tlp
    }
    let url = ""
    if (this.state.action === "insert") {
      url = "http://localhost:8080/member/"
      axios.post(url, form, this.headerConfig())
        .then(response => {          
          this.getMember()
          this.handleColse()
        })
        .catch(error => console.log(error))
    } else if (this.state.action === "update") {
      url = "http://localhost:8080/member/" + this.state.id_member
      axios.put(url, form, this.headerConfig())
        .then(response => {          
          this.getMember()
          this.handleColse()
        })
        .catch(error => console.log(error))
    }
    this.setState({
      isModalOpen: false
    })
  }

  Drop = (id) => {
    let url = "http://localhost:8080/member/" + id
    if (window.confirm("Are you sure to delete this data?")) {
      axios.delete(url)
        .then(res => {
          console.log(res.data.message)
          this.getMember()
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }

  componentDidMount() {
    this.getMember()
  }

  render() {
    return (
      <div className='bg-purple-100 h-screen'>
        {this.state.role == "owner" &&
            <NavbarOwner />
        }
        {this.state.role == "admin" &&
            <Navbar />
        }
        {this.state.role == "kasir" &&
            <NavbarKasir />
        }
        <div className="mt-10 w-full">
          <div className='ml-20'>
            <h4 className="text-3xl text-purple-500 text-center font-bold">
                Data User
            </h4>
            <button className="bg-green-500 text-white text-lg font-medium px-3 py-2 rounded-xl my-3" id="btn-blue" onClick={() => this.handleAdd()}>+ Tambah User</button>
          </div>
          <table className="table-fixed text-sm text-left w-11/12 mx-auto border-collapse border border-slate-400">
            <thead className='text-purple-100 text-center bg-purple-400'>
              <tr className='text-lg'>
                <th className='border border-slate-400'>Member ID</th>
                <th className='border border-slate-400'>Name</th>
                <th className='border border-slate-400'>Address</th>
                <th className='border border-slate-400'>Gender</th>
                <th className='border border-slate-400'>No Telp</th>
                <th className='border border-slate-400'>Aksi</th>
              </tr>
            </thead>
            <tbody className='text-lg text-center text-black'>
              {this.state.member.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='border border-slate-400 bg-white'>{item.id_member}</td>
                    <td className='border border-slate-400 bg-white'>{item.nama}</td>
                    <td className='border border-slate-400 bg-white'>{item.alamat}</td>
                    <td className='border border-slate-400 bg-white'>{item.jenis_kelamin}</td>
                    <td className='border border-slate-400 bg-white'>{item.tlp}</td>
                    <td className='border border-slate-400 bg-white'>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white p-2" onClick={() => this.handleEdit(item)}><Edit /></button>
                      <button className="ml-2 bg-red-500 hover:bg-red-700 text-white p-2" id="blue" onClick={() => this.Drop(item.id_member)}><Trash /></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <br></br>



        </div>

        <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Member</Modal.Title>
          </Modal.Header>
          <Form onSubmit={e => this.handleSave(e)}>
            <Modal.Body>
              <Form.Group className="mb-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="nama" placeholder="Input name"
                  value={this.state.nama} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-2" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="alamat" placeholder="Input address"
                  value={this.state.alamat} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-2" controlId="gender">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Select type="text" name="jenis_kelamin" onChange={this.handleChange} >
                  <option value={this.state.jenis_kelamin}>{this.state.jenis_kelamin}</option>
                  <option value="L">Laki-Laki</option>
                  <option value="P">Perempuan</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-2" controlId="tlp">
                <Form.Label>No Telp</Form.Label>
                <Form.Control type="text" name="tlp" placeholder="Input telp"
                  value={this.state.tlp} onChange={this.handleChange} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button className='bg-purple-400' type="submit" >
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

      </div>
    );
  }
}

export default Member;