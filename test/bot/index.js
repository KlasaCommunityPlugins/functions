const { Client } = require('klasa');
const plugin = require('../../dist/index');

console.log(plugin);

Client.use(plugin);

const client = new Client({
	aliasFunctions: {
		enabled: true,
		prefix: 'wow',
	},
	createPiecesFolders: false,
});

client.once('ready', () => {
	client.console.log('TESTING STORE');
	client.console.log(client.functions);
	client.console.log('TESTING FUNCTION');
	client.console.log(client.wow.test.run());
})

client.login('');
