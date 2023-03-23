import { Box } from "@mui/material";
import { useEffect , useState } from "react";
import Table from 'react-bootstrap/Table';


import Header from "../../components/Header";


const Contacts = () => {


  //-----------fetching db data---------------------------
  
  const [data , setData]= useState([]);
   useEffect(()=>{
      
          fetch("http://localhost:9002/getalerts" , {

          method: "GET" , 
          })
          .then((res) => res.json())
          .then((data)=>{
            console.log(data , "formData")
            setData(data.data);
          })
   } , [])


  return (
    <div>
    <Box m="20px">
      <Header
        title="Team Members"
        subtitle="List of Contacts"
      />
      
    </Box>
   <div>
   
   <Table striped bordered hover variant="dark">
     
        <tr>
         
          <th>Id</th>
          <th>Name</th>
          <th>Severity</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
       
    
      <tbody>
       {data.map(i=>{
          return(
           
            <tr >
          
              <td >{i.id}</td>
              <td>{i.name}</td>
              <td>{i.Severity}</td>
              <td style={{textJustify: "auto"}}>{i.Descrip}</td>
              <td>{i.date}</td>
             
            </tr>
            
          )
        })}
       
       
       
      </tbody>
    </Table>
    </div>
    </div>


   
  );
};

export default Contacts;
