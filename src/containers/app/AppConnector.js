import {
    connect,
} from 'react-redux';

import {
    fetchCards,
} from '@core/card/actions';
import App from './App';


const mapStateToProps = () => ({});
const actionToProps = {
    fetchCards,
};

export default connect(mapStateToProps, actionToProps)(App);
