import React from 'react';
import Navbar from '../../components/Navbar'
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

class ChooseMember extends React.Component {
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
        this.state.id_member = localStorage.getItem('id_member')
      } else {
        window.alert("You are not an admin")
        window.location = '/login'
      }
    } else {
      window.location = "/login"
    }
  }

  handleChoose = (item) => {
    let confirmAction = window.confirm("Choose " + item.nama + " ?")
      if (confirmAction) {
        alert("successfully executed member");
        localStorage.setItem("id_member", item.id_member);
        localStorage.setItem("nama_member", item.nama);
        localStorage.setItem("alamat_member", item.alamat);
        localStorage.setItem("jenis_kelamin", item.jenis_kelamin);
        localStorage.setItem("tlp_member", item.tlp);
        if (localStorage.getItem('role') === "admin"){
          window.location = '/paket'
        } if (localStorage.getItem('role') === "kasir"){
          window.location = '/choosepaket'
        } 
        
      } else {
        alert("Canceled to choose member");
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

  componentDidMount() {
    this.getMember()
  }



  render() {
    return (
      <div className='bg-purple-100 h-screen'>
        <Navbar />
        <div className="mt-10 w-full">
          <h4 className="text-3xl text-center text-purple-500 ml-20 font-bold mb-3">
              Data Outlet
          </h4>
          <table className="table-fixed text-sm text-left w-11/12 mx-auto border-collapse border border-slate-400">
            <thead className='text-purple-100 text-center bg-purple-400'>
              <tr className='text-lg'>
                <th className='border border-slate-400'>ID Member</th>
                <th className='border border-slate-400'>Nama</th>
                <th className='border border-slate-400'>Alamat</th>
                <th className='border border-slate-400'>Jenis Kelamin</th>
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
                      <button className="bg-green-500 text-white text-lg font-medium px-3 py-2 rounded-xl my-3" onClick={() => this.handleChoose(item)}>Pilih</button>
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
              <Button variant="primary" type="submit" id="blue">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>

      </div>
    );
  }
}

export default ChooseMember;