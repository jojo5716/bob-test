const methods = require('./methods');

export default {
    getAll: async (endpoint = '/ajax/card/list/') => methods.get(endpoint),
};
