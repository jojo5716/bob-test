import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from '@src/containers/app/AppConnector';
import Home from '@src/containers/home/HomeConnector';

import {
    HOME_URL,
} from '@src/constants/urls';



const renderContainer = ({
    Component,
    props,
}) => {
    return (
        <App>
            <Component {...props} />
        </App>
    );
}

const Routes = ({ selectedContainer, selectedContainerParent, updateSelectedContainer }) => (
    <Switch>
        <Route exact path={HOME_URL} render={props => renderContainer({
            Component: Home,
            props,
        })} />        
    </Switch>
);

export default Routes;
