var PeerServer = require('peer').PeerServer;
var peerserver = PeerServer({port: 9000, path: '/myapp'});

peerserver.on('connection', function(id) { 

    console.log(id)
});