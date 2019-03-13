require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayAll from  './components/DisplayAll';
import EditItem from  './components/EditItem';


render(
    <Router history={browserHistory}>
        <Route path="/" component={Master} >
            <Route path="/create" component={CreateProduct} />
            <Route path="/api/product/show-all" component={DisplayAll} />
            <Route path="/api/product/edit/:id" component={EditItem} />

        </Route>
    </Router>,
    document.getElementById('master'));

