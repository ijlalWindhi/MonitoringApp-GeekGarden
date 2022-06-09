import React from 'react';
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import {Edit, Trash} from 'react-feather'

class Outlet extends React.Component {
  constructor() {
    super();
    this.state = {
      outlet: [],
      isModalOpen: false,
      token: "",
      id_outlet: 0,
      nama: "",
      alamat: "",
      tlp: "",
      search: "",
      isModalPw: false,
      action: ""

    }
    if (localStorage.getItem('token')) {
      if (localStorage.getItem('role') === "admin") {
        this.state.role = localStorage.getItem('role')
        this.state.token = localStorage.getItem('token')
        this.state.userName = localStorage.getItem('name')
      } else {
        window.alert("You are not an admin")
        window.location = '/login'
      }
    } else {
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

  getOutlet = () => {
    let url = 'http://localhost:8080/outlet/'
    axios.get(url, this.headerConfig())
      .then(res => {
        this.setState({
          outlet: res.data.outlet
        })
        console.log(this.state.outlet)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleEdit = (item) => {
    let url = "http://localhost:8080/outlet/" + item.id_outlet
    axios.get(url)
      .then(res => {
        this.setState({
          isModalOpen: true,
          nama: item.nama,
          alamat: item.alamat,
          tlp: item.tlp,
          id_outlet: item.id_outlet,
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
      tlp: this.state.tlp
    }
    let url = ""
    if (this.state.action === "insert") {
      url = "http://localhost:8080/outlet/"
      axios.post(url, form, this.headerConfig())
        .then(response => {
          this.getOutlet()
          this.handleColse()
        })
        .catch(error => console.log(error))
    } else if (this.state.action === "update") {
      url = "http://localhost:8080/outlet/" + this.state.id_outlet
      axios.put(url, form, this.headerConfig())
        .then(response => {
          this.getOutlet()
          this.handleColse()
        })
        .catch(error => console.log(error))
    }
    this.setState({
      isModalOpen: false
    })
  }

  Drop = (id) => {
    let url = "http://localhost:8080/outlet/" + id
    if (window.confirm("Are you sure to delete this data?")) {
      axios.delete(url)
        .then(res => {
          console.log(res.data.message)
          this.getOutlet()
        })
        .catch(err => {
          console.log(err.message)
        })
    }
  }

  componentDidMount() {
    this.getOutlet()
  }

  render() {
    return (
      <div className='bg-purple-100 h-screen'>
        <Navbar />
        <div className="mt-10 w-full">
          <div className='ml-20'>
            <h4 className="text-3xl font-bold text-center text-purple-500">
                Data Outlet
            </h4>
            <button className="bg-green-500 text-white text-lg font-medium px-3 py-2 rounded-xl my-3" id="btn-blue" onClick={() => this.handleAdd()}>+ Tambah Outlet</button>
          </div>
          <table className="table-fixed text-sm text-left w-11/12 mx-auto border-collapse border border-slate-400">
            <thead className='text-purple-100  text-center bg-purple-400'>
              <tr className='text-lg'>
                <th className='border border-slate-400'>Outlet ID</th>
                <th className='border border-slate-400'>Name</th>
                <th className='border border-slate-400'>Address</th>
                <th className='border border-slate-400'>No Telp</th>
                <th className='border border-slate-400'>Aksi</th>
              </tr>
            </thead>
            <tbody className='text-lg text-center text-black'>
              {this.state.outlet.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='border border-slate-400 bg-white'>{item.id_outlet}</td>
                    <td className='border border-slate-400 bg-white'>{item.nama}</td>
                    <td className='border border-slate-400 bg-white'>{item.alamat}</td>
                    <td className='border border-slate-400 bg-white'>{item.tlp}</td>
                    <td className='border border-slate-400 bg-white'>
                      <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-2" onClick={() => this.handleEdit(item)}><Edit /></button>
                      <button className="ml-2 bg-red-500 hover:bg-red-700 text-white p-2" id="blue" onClick={() => this.Drop(item.id_outlet)}><Trash /></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Outlet</Modal.Title>
          </Modal.Header>
          <Form onSubmit={e => this.handleSave(e)}>
            <Modal.Body>
              <Form.Group className="mb-2" controlId="name">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" name="nama" placeholder="Masukkan nama"
                  value={this.state.nama} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-2" controlId="address">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" name="alamat" placeholder="Masukkan alamat"
                  value={this.state.alamat} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-2" controlId="tlp">
                <Form.Label>No Telp</Form.Label>
                <Form.Control type="text" name="tlp" placeholder="Masukkan telephone"
                  value={this.state.tlp} onChange={this.handleChange} />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button  type="submit" className='bg-purple-500'>
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

      </div>
    );
  }
}

export default Outlet;