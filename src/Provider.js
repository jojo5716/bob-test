import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from '@core/history';
import configureStore from '@core/store/configureStore';

import Routes from '@core/routes';
import rootSaga from '@core/sagas';


class BobProvider extends React.Component {
    constructor(props) {
        super(props);

        this.store = configureStore();
        this.store.runSaga(rootSaga);
        this.history = history.generateHistory();
    }

    render() {
        return (
            <Provider store={this.store}>
                <Router history={this.history}>
                    <Routes
                        history={this.history}
                    />
                </Router>
            </Provider>
        );
    }
}

export default BobProvider;
