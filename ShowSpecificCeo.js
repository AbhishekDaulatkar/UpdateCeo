import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export default class ShowSpecificCeo extends Component {
    constructor(){
        super();
        
       this.state={ceo:null
    }
    this.show=this.show.bind(this);
    this.handleChanges=this.handleChange.bind(this);
        
    }
    show(e)
    {
        let ceoId=this.state.ceoId;
        fetch("http://localhost:50734​/api​/CeoDetails​/ShowSpecific​/"+ceoId).then(res=>res.json())
        .then(result=>{
            this.setState({ceo:result})
        })
    }
    componentDidMount()
    {
        this.show();
    }
   
    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }
    render() {
        return (
            // id displayer
          <>  <div className="App-header">
          <form>
            <table > 
            <tr >
                <td ><label >Ceo ID</label>
                <input className="spacer" type="text" name="ceoId" onChange={(e)=>this.handleChange({ceoId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><button type="button" onClick={(e)=>this.show(e)}>show</button>
                
                 </td>
              
              </tr>
            </table> 
          
          </form>
          </div>
            {/* //id displayer */}
            
            <Table striped bordered hover>
                <thead>
                
            <tr>
            <th>Ceo Id</th>
            <th>full name</th>
            {/* <th>First Name</th>
            <th>Last Name</th> */}
            <th>E_Mail</th>
            <th>Phone number</th>
            <th>Department</th>
            <th>Date Joined</th>
           
            <th>Password</th>
            </tr>
           </thead>

            {
            this.state.ceo?this.state.employee.map(x=>
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