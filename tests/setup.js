/* eslint-env node, mocha */
/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
copyProps(window, global);

configure({ adapter: new Adapter() });
