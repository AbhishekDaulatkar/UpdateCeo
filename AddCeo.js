import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

 

export default class AddCeo extends Component {
    constructor(){
        super();
        this.state={
            ceo:[],
            ceoId:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            dateJoined:'',
            password:'',
            checkPassword:''
        
        }
        this.create=this.create.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    create()
    {
        fetch("http://localhost:50734/api/CeoDetails/AddCeo",
        {
            "method":"POST",
            "headers":
            {
                "content-type":"application/json",
                 "accept":"application/json"
            },
    body:JSON.stringify({

 

            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            dateJoined:this.state.dateJoined ,
            password:this.state.password ,
            checkPassword:this.state.checkPassword

 

          })

 

    }).then(response=>response.json()).then(response=>{
        alert("data inserted");
    })
    .catch(err=>{
        console.warn(err);
    })
    }

 

    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }

 

    
    render() {
        const {Ceo}=this.state;
        return (
            
            <><div className="App-header">
          <form>
            <table  >
              <tr >
                <td ><label >First Name</label>
                <input className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td ><label >Last Name</label>
                <input className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >E Mail</label>
                <input className="spacer" type="text" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >Contact Number</label>
                  <input className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Department</label>
                  <input className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >dateJoined</label>
                  <input className="spacer" type="date" name="dateJoined"  onChange={(e)=>this.handleChange({dateJoined:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >password</label>
                  <input className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></input>
                  </td>
              </tr>
              <tr>
                <td>
                  <label >check password</label>
                  <input className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></input>
                  
                  
                </td>
              </tr>
              
              
              <tr>
                <td><button type="button" onClick={(e)=>this.create(e)}>Add</button>
                
                 </td>
              
              </tr>
            </table>
          
          </form>
          </div>
          </>
          
        //     <div >
        //     <Form>
        //     <fieldset >
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}> First Name</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}> Last Name</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})}> E Mail</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="contactNumber" onChange={(e)=>this.handleChange({contactNumber:e.target.value})}> mobile number</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3">
        //         <Form.Label htmlFor="Select"> select Department</Form.Label>
        //         <Form.Select id="Select" name="department" onChange={(e)=>this.handleChange({department:e.target.value})}>
        //           <option> ATM</option>
        //           <option> BIBA</option>
        //         </Form.Select>
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="dateOfJoining" onChange={(e)=>this.handleChange({dateOfJoning:e.target.value})}> doj</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="leaveBalance" onChange={(e)=>this.handleChange({leaveBalance:e.target.value})}> leave Bal</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="password" onChange={(e)=>this.handleChange({password:e.target.value})}> Password</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
        //       <Form.Group className="mb-3" >
        //         <Form.Label htmlFor="TextInput" name="checkPassword" onChange={(e)=>this.handleChange({checkPassword:e.target.value})}> Check Password</Form.Label>
        //         <Form.Control id="TextInput" placeholder=" input" />
        //       </Form.Group>
              
        //       <Button type="button" onClick={this.add}>  Add  </Button>
        //     </fieldset>
        //   </Form>
        //   </div> */}
          
        );
        

 

        }
}