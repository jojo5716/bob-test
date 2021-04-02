import { all } from 'redux-saga/effects';

import cardSagas from '@src/core/card/sagas';


export default function* sagas() {
    yield all([
        cardSagas(),
    ]);
}
