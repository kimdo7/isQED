var http_request = require('../http_request');

module.exports = {
    getAll: () => {
        return http_request.get('/users').then(data => data);
    }
}