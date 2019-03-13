/**
 * Created by fatuma.mkima on 3/13/2019.
 */
import React, {Component} from 'react';

import axios from "axios";
import {Button, Form} from "react-bootstrap";
class EditItem extends Component
{
    constructor (props){
        super (props);
        this.state={name: '', unit: ''};
        this.handlename = this.handlename.bind(this);
        this.handleunit = this.handleunit.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    componentDidMount(){

        let  url ='/api/product/'+this.props.params.id+'/edit';
        axios.get(url).then(response=>{

            this.setState({name: response.data.name, unit:response.data.unit});

            console.log("data "+  this.props.params.id);
        })
            .catch(function (error) {
                console.log(error);

            });
    }

    handlename(e){
        this.setState({
            name: e.target.value
        });
    }

    handleunit(e){
        this.setState({
            unit: e.target.value
        });
    }

    handlesubmit(e){
        e.preventDefault();
        const product = {
            name: this.state.name,
            unit: this.state.unit
        };

        let uri = '/api/product/'+this.props.params.id;
        axios.patch(uri,product).then((response) => {
            this.props.history.push('product/show-all');
        });
    }

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Form onSubmit={this.handlesubmit}>

                            <Form.Group controlId="formGroupText">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name"
                                              value = {this.state.name} onChange={this.handlename}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupText">
                                <Form.Label>Product Unit</Form.Label>
                                <Form.Control type="text" placeholder="price unit" value={this.state.unit} onChange={this.handleunit}
                                              />
                            </Form.Group>
                            <Button variant="primary" type="submit">Save</Button>

                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}

export default EditItem;