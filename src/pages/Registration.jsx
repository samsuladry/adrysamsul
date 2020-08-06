import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ListGroup } from 'react-bootstrap';

class Registration extends Component{

   state = {
        name: '',
        matricNo: '',
        age: '',
        kulliyah: '',
        course: '',
        club: '',
        status: '',
        designation: '',
        position: '',
        email : '',
        password: ''
    };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = (e) =>
  {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: '',
      matricNo: '',
      age: '',
      kulliyah: '',
      course: '',
      club: '',
      status: '',
      designation: '',
      position: '',
      email : '',
      password: ''
  })
  }

  render(){
    return(
      <div className='container'>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Registration
          </ListGroup.Item>
          <ListGroup.Item as="li">
           <Form>
            <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                name= "name"
                type="name" 
                placeholder="Enter full Name"
                value = {this.state.name} 
                onChange={e => this.change(e)} />
            </Form.Group>

            <Form.Group controlId="matricNo">
                <Form.Label>Matric Number</Form.Label>
                <Form.Control 
                name= "matricNo"
                type="number" 
                placeholder="Enter matric Number"
                value = {this.state.matricNo} 
                onChange={e => this.change(e)} />
            </Form.Group>

            <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                name= "age"
                type="number" 
                placeholder="Enter age"
                value = {this.state.age} 
                onChange={e => this.change(e)} />
            </Form.Group>

            <Form.Group controlId="kulliyah">
              <Form.Label>Kulliyah</Form.Label>
                <Form.Control as="select" 
                name= "kulliyah"
                type= "select"
                value = {this.state.kulliyah} 
                onChange={e => this.change(e)}>
                  <option>Kulliyah: </option>
                  <option>KICT</option>
                  <option>KENGINE</option>
                  <option>KIRKHS</option>
                  <option>KENMS</option>
                  <option>KOED</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="course">
              <Form.Label>Course</Form.Label>
                <Form.Control as="select" 
                name= "course"
                type= "select"
                value = {this.state.course} 
                onChange={e => this.change(e)}>
                  <option>Course: </option>
                  <option>BCS</option>
                  <option>BIT</option>
                  <option>MECHA</option>
                  <option>MANU</option>
                  <option>CIVIL</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="club">
              <Form.Label>Club</Form.Label>
                <Form.Control as="select" 
                name= "club"
                type= "select"
                value = {this.state.club} 
                onChange={e => this.change(e)}>
                  <option>Club: </option>
                  <option>IIUM Acoustic Band</option>
                  <option>IIUM Gamelan Gema Gangsa</option>
                  <option>IIUM Andeka Caklempong</option>
                  <option>IIUM Angklung</option>
                  <option>IIUM Nafas Tari</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
                <Form.Control as="select" 
                name= "status"
                type= "select"
                value = {this.state.status} 
                onChange={e => this.change(e)}>
                  <option>Status: </option>
                  <option>Student</option>
                  <option>Alumni</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="designation">
                <Form.Label>Instrument</Form.Label>
                <Form.Control 
                name= "designation"
                type="text" 
                placeholder="Instrument"
                value = {this.state.designation} 
                onChange={e => this.change(e)} />
            </Form.Group>

            <Form.Group controlId="position">
              <Form.Label>Status</Form.Label>
                <Form.Control as="select" 
                name= "position"
                type= "select"
                value = {this.state.position} 
                onChange={e => this.change(e)}>
                  <option>Position: </option>
                  <option>President</option>
                  <option>Vice President 1</option>
                  <option>Vice President 2</option>
                  <option>Secretary</option>
                  <option>Members</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                  name= "email"
                  type="email" 
                  placeholder="Enter email"
                  value = {this.state.email} 
                  onChange={e => this.change(e)} />
              </Form.Group>

              <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  name= "password"
                  type="password" 
                  placeholder="Password"
                  value = {this.state.password} 
                  onChange={e => this.change(e)} />
              </Form.Group>

              <Button 
                  variant="primary"  
                  size="lg" 
                  block
                  onClick= {e => this.submit(e)}>
                  Submit
              </Button>
            </Form> 
          </ListGroup.Item>
      </ListGroup>
      </div>
    );
  }
}

export default Registration;

