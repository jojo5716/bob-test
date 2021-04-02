import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '@src/containers/app/AppConnector';
import Home from '@src/containers/home/HomeConnector';

import {
    HOME_URL,
} from '@src/constants/urls';


const renderContainer = ({
    Component,
    props,
}) => (
    <App>
        <Component {...props} />
    </App>
);

const Routes = () => (
    <Switch>
        <Route exact path={HOME_URL} render={props => renderContainer({
            Component: Home,
            props,
        })} />
    </Switch>
);

export default Routes;
