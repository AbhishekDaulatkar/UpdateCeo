import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'; 
import Table from 'react-bootstrap/esm/Table';


export default class CeoDashboard extends Component {
  constructor(){
    super();
    
   this.state={
    leaveId:'',
    employeeId:'',
    managerId:'',
    employeeLeaveBalance:'',
   numberofdays:'',
   startDate:'',
    endDate:'',
    status:'',
   reason:''
}

this.ShowSpecificLeave=this.ShowSpecificLeave.bind(this);
    
}
ShowSpecificLeave(e){
    
    let leaveId=this.state.leaveId;
    axios.get("http://localhost:5000/api/LeaveManagementDetails/ShowSpecificEmp/2")
    .then(Response=>{
        this.setState({
            leaveId:Response.data.leaveId,
            employeeId:Response.data.employeeId,
            managerId:Response.data.managerId,
            employeeLeaveBalance:Response.data.employeeLeaveBalance,
            numberofdays:Response.data.numberofdays,
            startDate:Response.data.startDate,
            endDate:Response.data.endDate,
            status:Response.data.status,
            reason:Response.data.reason
        })
    })
    .catch(err=>{
        console.log(err);
         alert(err);

    });
}
componentDidMount(){
  this.ShowSpecificLeave();
}

    render() {
        let UserName=localStorage.getItem("userName");
        //test
        const{leaveId}=this.state;
        const{employeeId}=this.state;
        const{managerId}=this.state;
        const{employeeLeaveBalance}=this.state;
        const{numberofdays}=this.state;
        const{startDate}=this.state;
        const{endDate}=this.state;
        const{status}=this.state;
        const{reason}=this.state;
        //test
        return (<>
        <div><h1>welcome {UserName}</h1></div>
           <div className="center">
           <div >
        <Row xs={1} md={2} className="g-1">
      
      <Col>
        <Card style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>My Details</Card.Title>
            <Card.Text>
             <Button href="/Searchbyid">Details</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Manager Details</Card.Title>
            <Card.Text>
              <Button href="/SearchByIdMan">Detail</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      {/* NEW ROW */}
      <Col>
      
        <Card  style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Apply Leave</Card.Title>
            <Card.Text>
              <Button href="/Addleave">Apply</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          {/* belo part is to show leave details inside dashboard  */}
          <Card.Body>
            <Card.Title>My Leave</Card.Title>
            <Card.Text>
              <Table>
              
               <div>
               {/* <tr >
                <td ><label >LeaveId</label>
                <input className="spacer" type="text" name="leaveId" defaultValue="1" onChange={(e)=>this.setState({leaveId:e.target.value})}></input></td>
                </tr> */}
            <Table striped bordered hover>
            {/* <Button variant="danger" onClick={(e)=>this.ShowSpecificLeave(e)}>search</Button> */}
           
                <thead>
               
                <tr>
                <th>Leaveid</th>
                <th>Employeeid</th>
                <th>Managerid</th>
                
                <th>Numberofdays</th>
                <th>Startdate</th>
                <th>Enddate</th>
                <th>status</th>
                <th>Reason</th>
                </tr>
           </thead>
           <tbody>
                <tr>
                    <td>{leaveId}</td>
                    <td>{employeeId}</td>
                    <td>{managerId}</td>
                    
                    <td>{numberofdays}</td>
                    <td>{startDate}</td>
                    <td>{endDate}</td>
                    <td>{status}</td>
                    <td>{reason}</td>
                </tr>
            </tbody>
           {/* {
 this.state.employee?this.state.employee.map(x=>
                   
            <tbody>
                <tr>
                    <td>{x.leaveId}</td>
                    <td>{x.employeeId}</td>
                    <td>{x.managerId}</td>
                    
                    <td>{x.numberofdays}</td>
                    <td>{x.startDate}</td>
                    <td>{x.endDate}</td>
                    <td>{x.status}</td>
                    <td>{x.reason}</td>
                </tr>
            </tbody>):null
                } */}
            
            </Table>
            </div>
             </Table>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
       
            </div></div>
            </>
        )
    }
}