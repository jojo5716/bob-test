/* eslint-disable max-statements */
/* eslint-disable prefer-destructuring */

import {
    call,
    put,
    fork,
    all,
    take,
    takeEvery,
} from 'redux-saga/effects';

import cardAPI from '@api/ajax/card';
import {
    FETCH_CARD_LIST,
    SAVE_CARDS,
} from '@src/constants/actions';

export default function* root() {
    yield all([
        fork(fetchCards),
        fork(watch),
    ]);
}

export function* watch() {
    yield takeEvery(FETCH_CARD_LIST, fetchCards);
}

export function* fetchCards() {
    yield take(FETCH_CARD_LIST);

    try {
        const cardsResponse = yield call(cardAPI.getAll);

        yield put({
            type: SAVE_CARDS,
            payload: {
                cards: cardsResponse,
            },
        });
    } catch (error) {
        console.error(error);
    }
}
