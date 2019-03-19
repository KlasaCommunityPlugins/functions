const { Client } = require('klasa');
const plugin = require('../../dist/index');

console.log(plugin);

Client.use(plugin);

const client = new Client({
	aliasFunctions: {
		enabled: true,
		prefix: 'wow',
		returnRun: false,
	},
	createPiecesFolders: false,
});

client.once('ready', () => {
	client.console.log(client.functions);
})

client.login('');
