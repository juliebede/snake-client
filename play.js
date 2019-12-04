
// play.js
const connect = require('./client');
console.log('Connecting ...');

const handlerUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInput = function(data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handlerUserInput);
  return stdin;
}

setupInput(handlerUserInput);