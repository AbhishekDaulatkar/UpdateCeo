import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';

import FloatingLabel from 'react-bootstrap/FloatingLabel'




export default class Login extends Component {
    constructor(){
        super();
        this.state={
        ceo:[],
        e_Mail:'',
        password:''
        }
        this.Login=this.Login.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
 
        
        
    Login(e){
        e.preventDefault();
        let e_Mail=this.state.e_Mail;
        let password=this.state.password;
        axios.get('http://localhost:5000/api/CeoDetails/Login/'+e_Mail+'/'+password)
        .then(res=>res
            )
        .then(result=>{
            console.log(result);
            localStorage.setItem("ceoid",result.data.ceoId)
             //alert(result);
            if(result!=null){
               //alert("Valid");
                
                window.location="/CeoDashboard";
                localStorage.setItem("userName",e_Mail)
                
              }
              else{
                alert("InValid");
                
                
              } 
        })
            .catch(err=>{
                console.log(err);
                 alert(err);
                
                return <Alert  variant='dark'>This is a {err} alert—check it out!</Alert>;
                
            });
    }
    handleChange(e)
    {
        this.setState(e);    
    }
    render() {
        return (
             <div className="App-header">
                 
                 <Card  style={{ height:'22rem',width:'23rem'  }} >
                 <Card.Header className="text-center">Sign in</Card.Header>
                 <Card.Body>
            <form>
                <br></br>
                <Col md>
            
            <Form.Group className="mb-4" controlId="formGroupEmail">
           
            <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="Enter email" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})} />
           </FloatingLabel>
            </Form.Group>
            </Col>
                

            <Form.Group className="mb-3" controlId="formGroupPassword">
            
            <FloatingLabel controlId="floatingInputGrid" label="Password">
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>this.handleChange({password:e.target.value})} />
            </FloatingLabel>
            </Form.Group>
            <Col md={{ span: 6, offset: 3 }}>{<Button  variant="danger" onClick={this.Login} >Sign in</Button>}</Col>
             
            
            </form>
            </Card.Body>
            <Card.Footer>If you are a new user <a href="CreateEmp">Register here</a></Card.Footer>
            </Card>
            
            </div>
            
        )
    }
}