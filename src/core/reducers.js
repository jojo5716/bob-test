import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as cardReducers from '@src/core/card/reducer';

export default combineReducers({
    routerReducer,
    cardReducers: cardReducers.reducer,
});
