import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from '../../pages/Login/Login';

const Routing = () => (
    <Switch>
        <Route path="/login" component={Login} />
    </Switch>
)

export default Routing;