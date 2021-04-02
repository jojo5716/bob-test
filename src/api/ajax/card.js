const methods = require('./methods');

module.exports = {
    getAll: async (endpoint = '/ajax/card/list/') => methods.get(endpoint),
};
