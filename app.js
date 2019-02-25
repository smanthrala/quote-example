"use strict";
process.title = 'quote-example';
var clientPort = process.env.PORT || 3100;
var http = require('http');
var clientExpress = require('express');
const clientApp = clientExpress();
var httpserver = http.Server(clientApp);

clientApp.get('/',(req,res)=>{
  res.sendFile(__dirname+"server.html");
});

//clientApp.use(clientExpress.static('public'));
httpserver.listen(clientPort, () => console.log(`Example app listening on port ${clientPort}!`));