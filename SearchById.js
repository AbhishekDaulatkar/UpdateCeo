import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class SearchbyId extends Component {
    constructor(){
        super();
        this.state={
            
            ceoId: '',
            firstName: '',
            lastName: '',
            e_Mail: '',
            contactNumber: '',
            department: '',
            dateJoined: '',
            password: ''         
        }
        this.SearchById=this.SearchById.bind(this);
    }
    SearchById(e){
        e.preventDefault();
        let ceoId=this.state.ceoId;
        axios.get('http://localhost:50734/api/CeoDetails/ShowSpecific/'+ceoId)
        .then(Response=>{
            this.setState({
                ceoId:Response.data.ceoId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
                dateJoined:Response.data.dateJoined,
            
                password:Response.data.password 
            })

        })
    }
    render() {
        const{ceoId}=this.state;
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        const{dateJoined}=this.state;
    
        const{password}=this.state;
        return (
            <>  <div className="App-header">
                <Card>
                    <Card.Body>
            <form>
              <table > 
                  <thead>
              <tr >
                  <td ><label >Ceo ID</label>
                  <input className="spacer" type="text" name="ceoId" onChange={(e)=>this.setState({ceoId:e.target.value})}></input></td>
                  </tr>
                  <tr>
                  <td><Button variant="danger" onClick={(e)=>this.SearchById(e)}>search</Button>
                  
                   </td>
                
                </tr>
                </thead>
              </table> 
            
            </form>
            </Card.Body>
            </Card>
            </div >
            <div>
              {/* //id displayer */}
              <Card>
              <Table striped bordered hover >
                  <thead>
                  
              <tr>
              <th>Ceo Id</th>
              <th>full name</th>
              
              <th>E_Mail</th>
              <th>Phone number</th>
              <th>Department</th>
              <th>Date Joined</th>
            
              <th>Password</th>
              </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{ceoId}</td>
                     <td>{firstName+"  "+lastName}</td>
                     <td>{e_Mail}</td>
                     <td>{contactNumber}</td>
                     <td>{department}</td>
                     <td>{dateJoined}</td>
                     
                     <td>{password}</td>
                 </tr>
             </tbody>
             
  
              {/* {
              this.state.employee?this.state.employee.map(x=>
                  <tbody>
                  <tr>
                      
                  <td> {x.employeeId} </td>
                  <td>{x.firstName+"  "+x.lastName}</td>
                  
                  <td> {x.e_Mail} </td>
                  <td> {x.contactNumber} </td>
                  <td> {x.department} </td>
                  <td> {x.dateJoined} </td>
                  <td>{x.managerId}</td>
                  <td> {x.leaveBalance} </td>
                  <td> {x.password} </td>
                  </tr>
                  </tbody>
                  
                  ):null
                  } */}
              </Table>
              </Card>
              </div>
              </>
        )
    }
}