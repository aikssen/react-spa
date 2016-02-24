import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import { Layout } from './Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';
import { User } from './components/User';
import { NoMatch } from './components/NoMatch';


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
    <Router history={appHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}>
                <Route path="/users/:id" component={User}/>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
);

render(routes,document.getElementById('app-container'));
