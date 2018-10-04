const { Client } = require('klasa');
const { token } = require('./config');

Client.use(require('../../src/index.js').Client);

const client = new Client({ aliasFunctions: { returnRun: true, enabled: true } });

// client.on(REQUEST, args => console.log(args));

client.login(token);
