import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

 

export default class ShowAllCeo extends Component {
    constructor(){
        super();
        this.state={ceo:null}
    }
    Showall()
    {
        //const url="http://localhost:50734/api/CeoDetails/Allceo";//, {mode: 'no-cors'}
        fetch('http://localhost:50734/api/CeoDetails/Allceo').then(res=>res.json())
        .then(result=>{
            this.setState({ceo:result})
        })
    }
    componentDidMount()
    {
        this.Showall();
    }
    render() {
        return (
            <>
            <Table striped bordered hover>
                <thead>
                
            <tr>
            <th>Employee Id</th>
            <th>full name</th>
            {/* <th>First Name</th>
            <th>Last Name</th> */}
            <th>E_Mail</th>
            <th>Phone number</th>
            <th>Department</th>
            <th>Date Joined</th>
            <th>Leave Balance</th>
            <th>Password</th>
            </tr>
           </thead>

 

            {
            this.state.ceo?this.state.ceo.map(x=>
                <tbody>
                <tr>
                    
                <td> {x.ceoId} </td>
                <td>{x.firstName+"  "+x.lastName}</td>
                
                <td> {x.e_Mail} </td>
                <td> {x.contactNumber} </td>
                <td> {x.department} </td>
                <td> {x.dateJoined} </td>
                <td> {x.password} </td>
                </tr>
                </tbody>
                
                ):null
                }
            </Table>
            </>
        )
    }
}