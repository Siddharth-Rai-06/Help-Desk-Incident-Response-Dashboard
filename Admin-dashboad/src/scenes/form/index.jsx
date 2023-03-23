import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import { Box } from '@mui/system';
import Row from 'react-bootstrap/Row';
import classes from "../form/formData.module.css"
import Header from "../../components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from 'axios';




function GridComplexExample() {
  
  const [formData , setFormData] = useState({
    name: "",
    empid: "",
    email: "",
    age: "",
    city: "",
    phone: ""
  });
  
  const formHandler = (e) => {   
    
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setFormData({...formData , [name]:value});
  }

  const handler = () => {
    const {name , empid , email  , age , city , phone} = formData
    if(name && empid && email && age  && city , phone) {
      // alert("posted")
      axios.post("http://localhost:9002/form" , formData)
      .then(res => console.log(res))
    } else {
      alert("invalid input")
    }
  } 

  return (
   <div>
      <Box m="20px">
      <Header
        title="Profile Form"
        subtitle="Add a team member"
      />
      
    </Box>
   
    <div className={classes.formStyle}>
    <div>
    {console.log("FormData" , formData)}
      <div>
        <Form.Group className="mb-2" controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name}  onChange={formHandler} placeholder="Enter name"  autoComplete= "off"/>
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-2"  controlId="formGridPassword">
          <Form.Label>Employee Id</Form.Label>
          <Form.Control type="number" name= "empid" value={formData.empid} onChange={formHandler} placeholder="Employee Id" />
        </Form.Group>
        </div>
        
      <div>
      <Form.Group className="mb-2" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <Form.Control  name="email" value={formData.email}  onChange={formHandler} placeholder="Email" autoComplete= "off"/>
      </Form.Group>
      </div>
      <div>
        <Form.Group className="mb-2"  controlId="formGridCity">
          <Form.Label>Age</Form.Label>
          <Form.Control name="age" value={formData.age} onChange={formHandler} placeholder="Age" autoComplete= "off"/>
        </Form.Group>
        </div>
        <div>
        <Form.Group  className="mb-2"   controlId="formGridZip">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={formData.city} onChange={formHandler} placeholder="City" autoComplete= "off"/>
        </Form.Group>
        </div>
      <div>
      <Form.Group className="mb-2"  controlId="formGridCity">
          <Form.Label>Phone</Form.Label>
          <Form.Control name="phone" type="number" value={formData.phone} onChange={formHandler} placeholder="Phone" autoComplete= "off" />
        </Form.Group>
        </div>
      <div className= {classes.submit}>
      <Button variant="primary" onClick= {handler}>
        Submit
      </Button>
      </div>
      </div>
      </div>
      </div>
  );
}

export default GridComplexExample;