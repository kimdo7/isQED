// request.js
// https://nodejs.org/api/http.html
const http = require('http');

module.exports = {
    get: (url) => {
        url = "/api" + url
        return new Promise((resolve, reject) => {
            http.get({
                hostname: 'localhost',
                port: 8000,
                path: url
            }, response => {
                let data = '';
                response.on('data', _data => (data += _data));
                response.on('end', () => resolve(data)
                );
            });
        });
    }
}