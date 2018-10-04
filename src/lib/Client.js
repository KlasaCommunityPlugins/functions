const { Client, util: { mergeDefault } } = require('klasa');
const path = require('path');
const { OPTIONS } = require('../lib/util/CONSTANTS');
const FunctionStore = require('../lib/structures/FunctionStore');

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
class FunctionsClient extends Client {

	/**
	 * @typedef {external:KlasaClientOptions} FunctionsClientOptions
	 * @property {FunctionsClientPieceDefaults} [pieceDefaults={}] Overrides the defaults for all pieces
	 * @property {aliasFunctionsOptions} [aliasFunctions={}]
	 */

	/**
	 * @typedef {Object} aliasFunctionsOptions
	 * @property {boolean} [enabled=false]
	 * @property {boolean} [returnRun=false]
	 * @property {string} [prefix="funcs"]
	 */

	/**
	 * @typedef {external:KlasaPieceDefaults} FunctionsClientPieceDefaults
	 * @property {FunctionsOptions} [functions={}]
	 */

	/**
	 * Constructs the klasa-rawevents client
	 * @since 0.0.1
	 * @param {FunctionsClientOptions} config The config to pass to the new client
	 */
	constructor(config) {
		super(config);
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		mergeDefault(OPTIONS, this.options);

		/**
		 * The cache where functions are stored
		 * @since 0.0.1
		 * @type {FunctionStore}
		 * @name FunctionsClient#functions
		 */
		this.functions = new FunctionStore(this);

		this
			.registerStore(this.functions);

		const coreDirectory = path.join(__dirname, '..', '/');

		this.functions.registerCoreDirectory(coreDirectory);

		const { options } = this;

		if (this.options.aliasFunctions.enabled) {
			this[options.aliasFunctions.prefix] = new Proxy(this.functions, {
				get(target, prop) {
					if (prop === Symbol.iterator) return target[Symbol.iterator].bind(target);
					return target.has(prop) ? options.aliasFunctions.returnRun ? target.get(prop).run : target.get(prop) : 'That is not a registered function';
				}
			});
		}
	}

}

module.exports = FunctionsClient;
