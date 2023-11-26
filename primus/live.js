module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {  });
   //check if connection, then console.log
   primus.on('connection', (spark) => {
       console.log('connected');
   });

}