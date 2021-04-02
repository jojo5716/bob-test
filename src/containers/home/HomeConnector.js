import { connect } from 'react-redux';

import Home from './Home';


const mapStateToProps = state => ({
    cards: state.cardReducers.cards,
});
const actionToProps = {};

export default connect(mapStateToProps, actionToProps)(Home);
