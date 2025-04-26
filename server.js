// server.js
const net = require('net');
const { decode, encode } = require('./protocol');

const handlers = {
  greet: (header, payload) => {
    return encode({ type: 'response', status: 200 }, { message: `Hello, Client!` });
  },
  ping: (header, payload) => {
    return encode({ type: 'pong' }, { time: Date.now() });
  },
  echo: (header, payload) => {
    return encode({ type: 'echo' }, payload); // just echo back the same payload
  }
};

const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    try {
      const { header, payload } = decode(data);
      console.log('Received:', header, payload);

      const handler = handlers[header.type];
      if (handler) {
        const response = handler(header, payload);
        socket.write(response);
      } else {
        socket.write(encode({ type: 'error' }, { message: 'Unknown message type' }));
      }
    } catch (err) {
      console.error('Invalid protocol message:', err.message);
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

server.listen(9000, () => {
  console.log('Server listening on port 9000');
});
