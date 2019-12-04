let connection;

const handlerUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077') { // w
    connection.write('Move: up'); 
  } else if (key === '\u0061') { // a
    connection.write('Move: left');
  } else if (key === '\u0064') { // s
    connection.write('Move: right');
  } else if (key === '\u0073') { // d
    connection.write('Move: down');
  } else if (key === '\u0068') {  // h
    connection.write('Say: hello');
  } else if (key === '\u006D') { // m
    connection.write('Say: move')
  } else if (key === '\u0067') { // g
    connection.write('Say: go away!')
  }
}

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handlerUserInput);
  return stdin;
}

module.exports = setupInput;

