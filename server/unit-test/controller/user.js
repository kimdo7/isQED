var http_request = require('../http_request');

module.exports = {
    getAll: () => {
        return http_request.get('/user').then(data => data);
    }
}