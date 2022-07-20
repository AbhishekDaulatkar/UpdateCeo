import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 

export default class DeleteCeo extends Component {
    constructor()
    {
        super();
        this.state={
            
            ceoId:''
            
    }
    this.delete=this.delete.bind(this);
    
}
    delete(){
        let ceoId=this.state.ceoId;
        axios.delete('http://localhost:50734/api/CeoDetails/DeleteCeo/'+ceoId)
       .then(Response=>{
        alert("data deleted");
})
.catch(err=>{
    alert(err);
})

}

    render() {
        
        return (
            <div className="App-header">
                 
          <Card  style={{ }} >
          <Card.Header className="text-center">Sign in</Card.Header>
          <Card.Body>
     <form>
          <Form.Group className="mb-0" >
            <Form.Label >Ceo Id</Form.Label>
         <Form.Control className="spacer" type="text" name="ceoId" onChange={(e)=>this.setState({ceoId:e.target.value})}></Form.Control>
         </Form.Group>
            
                <Button variant="danger" onClick={this.delete}>Delete</Button>
                </form>
     </Card.Body>
     </Card>
     
     </div>
            
        )
    }
}