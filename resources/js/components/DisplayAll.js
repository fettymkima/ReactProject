/**
 * Created by fatuma.mkima on 3/12/2019.
 */
import React, {Component} from 'react';
import axios from 'axios';
import {link} from 'react-router';
import {Table} from "react-bootstrap";
import TableRow from './TableRow';


class DisplayAll extends Component{
    constructor(props){
        super(props);
        this.state = {value: '', items: ''}
    }

    getData(){
        axios.get('/api/product')
            .then(response=>{

            this.setState({items: response.data});
            // console.log("data "+response.data);
        })
            .catch(function (error) {
            console.log(error);
        });
    }

    tableRow(){
        if(this.state.items instanceof Array){
            // console.log("data ");

            return this.state.items.map(function (object, i) {
                return <TableRow obj={object} key={i}/>;
            });
        }
    }

    render(){
        return(
            <div className="container">

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Unit</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getData()}
                    {this.tableRow()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DisplayAll;