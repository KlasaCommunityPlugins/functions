const { Store } = require('klasa');
const Function = require('./Function');

/**
 * Stores all the functions that are part of the plugin
 * @extends external:Store
 */
class FunctionStore extends Store {

	/**
	 * @since 0.0.1
	 * @param {FunctionsClient} client The Klasa client
	 */
	constructor(client) {
		super(client, 'functions', Function);
	}

}

module.exports = FunctionStore;
