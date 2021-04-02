/* eslint-disable max-params */
/**
 * Common methods to make AJAX calls
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
const querystring = require('querystring');

const URL_DOMAIN = 'http://localhost:3000';

module.exports = {

    /**
     * Makes a GET request to the API
     */
    get: function get(url) {
        const options = {
            // credentials: 'include',
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        };

        return fetch(`${URL_DOMAIN}${url}`, options)
            .then(response => response.json())
    },

    /**
     * Makes a POST request to the API,
     */
    post: function post(url, body, applyQuerystring = true) {
        const bodyQuerystring = applyQuerystring ? querystring.stringify(body) : body;

        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                Accept: 'application/json',
            },
            body: bodyQuerystring,
        })
            .then(response => response.json())
    },
};
