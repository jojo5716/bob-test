/* eslint "import/no-extraneous-dependencies": ["error", {"devDependencies": true }] */
import React from 'react';
import ReactDOM from 'react-dom';

import Provider from '@src/index-with-styles';


ReactDOM.render(
    <Provider />, document.getElementById('root'),
);
