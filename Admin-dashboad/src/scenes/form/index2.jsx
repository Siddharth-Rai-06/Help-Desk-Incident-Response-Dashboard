import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import { Box } from '@mui/system';
import Header from "../../components/Header";
import { useState } from 'react';
import axios from 'axios';
import classes from "../form/formData.module.css"



function GridComplexExample() {
  
  const [AlertData , setAlertData] = useState({
    id: "",
    Severity: "",
    name: "",
    Descrip: "",
    Triggered: "",
    date: ""
  });
  
  const formHandler = (e) => {   
    
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setAlertData({...AlertData , [name]:value});
  }

  const handler = () => {
    const {id , Severity , name  , Descrip , Triggered , date} = AlertData
    if(id && Severity && name && Descrip  && Triggered , date) {
      // alert("posted")
      axios.post("http://localhost:9002/alerts" , AlertData)
      .then(res => console.log(res))
    } else {
      alert("invalid input")
    }
  } 

  

  return (
    <div>
    <div>
      <Box m="20px">
      <Header
        title="Alert Form"
        subtitle="Create an Alert Notification "
      />
      
    </Box>
    </div>
    <div className={classes.formStyle}>
    {console.log("Alertdata" , AlertData)}
      <div>
        <Form.Group className="mb-2"  controlId="formGridEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" name="id"  value={AlertData.id}  onChange={formHandler} placeholder="Id" autoComplete="off"/>
        </Form.Group>
      </div>
       

      <div>
      <Form.Group controlId="formGridPassword" className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name= "name" value={AlertData.name} onChange={formHandler} placeholder="Enter name" autoComplete="off" />
        </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-2" controlId="formGridAddress1">
        <Form.Label>Severity</Form.Label>
        <Form.Control  placeholder="Severity" name="Severity" value={AlertData.Severity}  onChange={formHandler} autoComplete="off" />
      </Form.Group>
      </div>
     
      <div>
        <Form.Group className="mb-2" controlId="formGridCity">
          <Form.Label>Description</Form.Label>
          <Form.Control name="Descrip" type="text" value={AlertData.Descrip} onChange={formHandler} placeholder="Description" />
        </Form.Group>
        </div>
        <div>
        <Form.Group className="mb-2" controlId="formGridZip">
          <Form.Label>Triggered</Form.Label>
          <Form.Control name="Triggered" value={AlertData.Triggered} onChange={formHandler} placeholder="Triggered" autoComplete= "off" />
        </Form.Group>
        </div>
    
     
      <div>
      <Form.Group className="mb-2" controlId="formGridCity">
          <Form.Label>Created</Form.Label>
          <Form.Control name="date" type="date" value={AlertData.date} onChange={formHandler} placeholder= "Created" autoComplete="off" />
        </Form.Group>
      </div>
     
      <div className= {classes.submit}>
      <Button variant="primary" onClick= {handler}>
        Submit
      </Button>
      </div>
      </div>
      </div>
     
  );
}

export default GridComplexExample;