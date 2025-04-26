// dynamicClient.js
const net = require('net');
const readline = require('readline');
const { encode, decode } = require('./protocol');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = net.createConnection({ port: 9000 }, () => {
  console.log('Connected to server');

  rl.question('Enter message type: ', (type) => {
    rl.question('Enter payload (JSON): ', (payloadStr) => {
      try {
        const payload = JSON.parse(payloadStr);
        const message = encode({ type }, payload);
        client.write(message);
      } catch (e) {
        console.log('Invalid JSON payload.');
        client.end();
        rl.close();
      }
    });
  });
});

client.on('data', (data) => {
  const { header, payload } = decode(data);
  console.log('Server response:', header, payload);
  client.end();
  rl.close();
});

client.on('end', () => {
  console.log('Disconnected from server');
});
