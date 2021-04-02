import {
    SAVE_CARDS,
} from '@src/constants/actions';

import { reducer as helperReducer } from '@src/helpers/reducer';

module.exports = {
    reducer,
};

const initialState = {
    cards: [],
};

const reducerMap = [
    SAVE_CARDS,
];

function reducer(state = initialState, action) {
    return helperReducer(state, action, reducerMap);
}
