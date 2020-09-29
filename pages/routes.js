import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Router from 'next/router';

import UsersList from './UsersList';

export default function Routes(){
    return(
       
            <Switch>
                <Route path="/" exact component={UsersList}/>
            </Switch>
    );
}