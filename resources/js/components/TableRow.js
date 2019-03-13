/**
 * Created by fatuma.mkima on 3/12/2019.
 */
import React, { Component } from 'react';
import {Link} from "react-router";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.unit}
                </td>
                <td>
                    <Link to={"/api/product/edit/"+this.props.obj.id} className="btn btn-primary" >Edit</Link>
                </td>
                <td>
                    <Link  className="btn btn-danger">Delete</Link>
                </td>
            </tr>
        )
    }
}

export default TableRow;