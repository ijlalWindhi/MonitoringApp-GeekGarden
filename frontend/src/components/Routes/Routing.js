import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from '../../pages/Login/Login';
import DashboardEmployee from '../../pages/Dashboard/Employee/Dashboard'

const Routing = () => (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/employee" component={DashboardEmployee} />
    </Switch>
)

export default Routing;