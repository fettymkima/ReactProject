/**
 * Created by fatuma.mkima on 3/12/2019.
 */

import React, {Component} from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";



class Master extends Component
{
    render()
    {
        return(
       <div className="container">
           <Navbar bg="primary" variant="dark">
               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
               <Nav className="mr-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="/create">Create Product</Nav.Link>
                   <Nav.Link href="/api/product/show-all">All Product</Nav.Link>
               </Nav>
               <Form inline>
                   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                   <Button variant="outline-light">Search</Button>
               </Form>
           </Navbar>
           <div>
               {this.props.children}
           </div>
       </div>
        );
    }
}
// if (document.getElementById('master')) {
//     ReactDOM.render(<Example />, document.getElementById('master'));
// }

export default Master;