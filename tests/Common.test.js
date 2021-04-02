/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

import React from 'react';
import { expectSaga } from 'redux-saga-test-plan';
import { shallow } from 'enzyme';


import Provider from '@src';
import { fetchCards } from '@core/card/sagas';


describe('Common', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(< Provider />);

    });

    it('renders the app', () => {
        setTimeout(() => {
            expect(wrapper.find('#layout-wrapper').length).toBe(1);
        }, 500);
    });

    it('renders a header component', () => {
        setTimeout(() => {
            expect(wrapper.find('header').length).toBe(1);
        }, 500);
    });

    it('Fetch bags action is called', () => (
        expectSaga(fetchCards)
            // Mock effects
            .provide([])
            .take('FETCH_CARD_LIST')
            .silentRun()
    ));
});
