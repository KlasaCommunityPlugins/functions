import { Client, KlasaClientOptions, util } from 'klasa';
import { join } from 'path';
import { FunctionStore } from './structures/FunctionStore';
import { OPTIONS } from './util/CONSTANTS';

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class FunctionsClient extends Client {
	/**
	 * @typedef {external:KlasaClientOptions} FunctionsClientOptions
	 * @property {FunctionsClientPieceDefaults} [pieceDefaults={}] Overrides the defaults for all pieces
	 * @property {AliasFunctionsOptions} [aliasFunctions={}]
	 */

	/**
	 * @typedef {Object} AliasFunctionsOptions
	 * @property {boolean} [enabled=false]
	 * @property {boolean} [returnRun=false]
	 * @property {string} [prefix="functions"]
	 */

	/**
	 * @typedef {external:KlasaPieceDefaults} FunctionsClientPieceDefaults
	 * @property {FunctionsOptions} [functions={}]
	 */

	/**
	 * Constructs the functions client.
	 * @since 0.0.1
	 * @param {FunctionsClientOptions} config The config to pass to the new client
	 */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as FunctionsClient;
		util.mergeDefault(OPTIONS, typedThis.options);

		const coreDirectory = join(__dirname, '..', '/');
		/**
		 * The cache where functions are stored
		 * @since 0.0.1
		 * @type {FunctionStore}
		 * @name FunctionsClient#functions
		 */
		typedThis.functions = new FunctionStore(typedThis, coreDirectory);

		typedThis.registerStore(typedThis.functions);

		const { options } = typedThis;

		if (options.aliasFunctions.enabled) {
			// @ts-ignore
			typedThis[options.aliasFunctions.prefix] = new Proxy(typedThis.functions, {
				get(target, prop) {
					if (prop === Symbol.iterator) return target[Symbol.iterator].bind(target);
					return target.has(prop as string)
						? options.aliasFunctions.returnRun
							? target.get(prop as string).run
							: target.get(prop as string)
						: prop in target
							// @ts-ignore
							? target[prop]
							: 'Unknown Function';
				},
			});
		}
	}
}

declare module 'klasa' {
	interface KlasaClientOptions {
		aliasFunctions: {
			enabled: boolean;
			returnRun: boolean;
			prefix: string;
		};
	}
}

declare module 'discord.js' {
	interface Client {
		functions: FunctionStore;
	}
}
