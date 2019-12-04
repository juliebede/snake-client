const net = require('net');


const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to game server');
  });
  
  conn.write('Name: JNG')

  conn.on('data', (data) => {
    console.log(data);
  });
  
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = connect;