import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

export default class EditCeo extends Component {
    constructor(){
        super();
        this.state={
            Ceo:[],
            ceoid:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            dateJoined:'',
           
            password:'',
            checkPassword:''
        
        }
        this.EditCeo=this.editCeo.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    editCeo(e)
    {
        e.preventDefault(this);
        let ceoId=this.state.ceoId;
        axios.patch('http://localhost:50734/api/CeoDetails/UpdateCeo/'+ceoId,{

            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            dateJoined:this.state.dateJoined ,
            
            password:this.state.password ,
            checkPassword:this.state.checkPassword

    }).then(response=>{
        console.warn(response);
        alert("CEO: "+ceoId+" updated");
    })
    .catch(error=>{
        alert("Error");
    })
    }

    handleChange(e)
    {
        this.setState(e);    
    }

    
    render() {
        
        return (
            
          <div className="App-header">
                 
          <Card  style={{ width:'30rem'  }} >
          <Card.Header className="text-center">Sign in</Card.Header>
          <Card.Body>
     <form>
     <Form.Group className="mb-0" >
         <Form.Label >Ceo Id</Form.Label>
         <Form.Control className="spacer" type="text" name="ceoId" onChange={(e)=>this.handleChange({employeeId:e.target.value})}></Form.Control>
         </Form.Group>
         <Form.Group className="mb-0" >
         <Form.Label >First Name</Form.Label>
         <Form.Control className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></Form.Control>
         </Form.Group>
         
         <Form.Group className="mb-0" >
         <Form.Label >Last Name</Form.Label>
         <Form.Control className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></Form.Control>
         </Form.Group>

         <Form.Group className="mb-0" controlId="formGroupEmail">
         <Form.Label >Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})} />
         </Form.Group>


           <Form.Group className="mb-0" >
           <Form.Label >Contact Number</Form.Label>
           <Form.Control className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >Department</Form.Label>
           <Form.Control className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >dateJoined</Form.Label>
           <Form.Control className="spacer" type="date" name="dateJoined"  onChange={(e)=>this.handleChange({dateJoined:e.target.value})}></Form.Control>
           </Form.Group>

          

           <Form.Group className="mb-0" controlId="formGroupPassword">
           <Form.Label >password</Form.Label>
           <Form.Control className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></Form.Control>
           </Form.Group>

           <Form.Group className="mb-0" >
           <Form.Label >check password</Form.Label>
           <Form.Control className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></Form.Control>
           </Form.Group>
        
           <Button variant="danger"onClick={this.editEmp}>sign up</Button> 
         </form>
     </Card.Body>
     </Card>
     
     </div>
          

          
        );
        

        }
}