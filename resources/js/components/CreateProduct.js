/**
 * Created by fatuma.mkima on 3/12/2019.
 */
import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

import  axios from 'axios';
import {browserHistory} from "react-router";
class CreateProduct extends Component
{
    constructor(props) {
        super(props);
        this.state = {productName: '', productUnit: ''};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e){
        this.setState({
            productName:e.target.value
        })
    }

    handleChange2(e){
        this.setState({
            productUnit:e.target.value


        });
        // console.log('onChange', this.state.productUnit);
    }

    handleSubmit(e){
       e.preventDefault();
       const productVariable = {
           name: this.state.productName,
           unit: this.state.productUnit
       };


       let uri = '/api/product';
        // console.log('onChange', productVariable);

        axios.post(uri, productVariable).then((response)=>{

            console.log("success "+response.data);
            browserHistory.push('/api/product/show-all');

       }) .catch(err => {
            console.log(err)
        });
    }

    render()
    {
        return(
            <div className="container">
               <div className="row">
               <div className="col-md-4">
                   <Form onSubmit={this.handleSubmit}>

                       <Form.Group controlId="formGroupText">
                           <Form.Label>Product Name</Form.Label>
                           <Form.Control type="text" placeholder="Enter product name" onChange={this.handleChange1}/>
                       </Form.Group>
                       <Form.Group controlId="formGroupText">
                           <Form.Label>Product Unit</Form.Label>
                           <Form.Control type="text" placeholder="price unit" onChange={this.handleChange2}/>
                       </Form.Group>
                       <Button variant="primary" type="submit">Save</Button>

                   </Form>

               </div>
               </div>
            </div>
        )
    }
}

export default CreateProduct;