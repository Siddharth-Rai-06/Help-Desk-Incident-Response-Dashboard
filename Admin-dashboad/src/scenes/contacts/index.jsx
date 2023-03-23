import { Box } from "@mui/material";
import { useEffect , useState } from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';



import Header from "../../components/Header";


const Contacts = () => {

  //-----------fetching db data---------------------------
  
  const [data , setData]= useState([]);
   useEffect(()=>{
      
          fetch("http://localhost:9002/getUsers" , {

          method: "GET" , 
          })
          .then((res) => res.json())
          .then((data)=>{
            console.log(data , "formData")
            setData(data.data);
          })
   } , [])

   let active = 2;
   let items = [];
   for (let number = 1; number <= 5; number++) {
     items.push(
       <Pagination.Item key={number} active={number === active}>
         {number}
       </Pagination.Item>,
     );
   }
  


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
         
          <th>Name</th>
          <th>Emp Id</th>
          <th>Email</th>
          <th>Age</th>
          <th>phone</th>
        </tr>
       
    
      <tbody>
       {data.map(i=>{
          return(
           
            <tr>
          
              <td>{i.name}</td>
              <td>{i.empid}</td>
              <td>{i.email}</td>
              <td>{i.age}</td>
              <td>{i.phone}</td>
             
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
