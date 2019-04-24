// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
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
	 * @property {string} [returnMethod=""]
	 * @property {string} [prefix="functions"]
	 */

	/**
	 * @typedef {external:KlasaPieceDefaults} FunctionsClientPieceDefaults
	 * @property {FunctionsOptions} [functions={}]
	 */

	/**
	 * Constructs the functions client.
	 * @since 0.0.1
	 * @param {FunctionsClientOptions} [config] The config to pass to the new client
	 */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin](this: FunctionsClient) {
		util.mergeDefault(OPTIONS, this.options);

		const coreDirectory = join(__dirname, '..', '/');
		/**
		 * The cache where functions are stored
		 * @since 0.0.1
		 * @type {FunctionStore}
		 * @name FunctionsClient#functions
		 */
		this.functions = new FunctionStore(this, coreDirectory);

		this.registerStore(this.functions);

		const { options } = this;
		const { returnMethod } = options.aliasFunctions;

		if (options.aliasFunctions.enabled && options.aliasFunctions.prefix) {
			if (options.aliasFunctions.prefix === 'functions') throw new Error(`[Functions-Plugin] "functions" is not a valid alias prefix option!`);
			// @ts-ignore
			this[options.aliasFunctions.prefix] = new Proxy(this.functions, {
				get(target, prop) {
					if (prop === Symbol.iterator) return target[Symbol.iterator].bind(target);
					return target.has(prop as string)
						? returnMethod
							? target.get(prop as string)[returnMethod]
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
		aliasFunctions?: {
			enabled?: boolean;
			returnMethod?: string;
			prefix?: string;
		};
	}
}

declare module 'discord.js' {
	interface Client {
		functions: FunctionStore;
	}
}
