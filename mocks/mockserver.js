var http = require('http');
var mockserver = require('mockserver');
 
http.createServer(mockserver('mocks')).listen(process.env.PORT || 5000);