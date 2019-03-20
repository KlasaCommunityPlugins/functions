import { Client as KlasaClient } from 'klasa';

import { FunctionsClient as Client } from './lib/Client';
export { Client };
export { Function } from './lib/structures/Function';
export { FunctionStore } from './lib/structures/FunctionStore';
// @ts-ignore
exports[KlasaClient.plugin] = Client[KlasaClient.plugin];

/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external Piece
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Piece}
 */
/**
 * @external Store
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Store}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
/**
 * @external KlasaPieceDefaults
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaPieceDefaults}
 */
/**
 * @external PieceOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/PieceOptions}
 */
