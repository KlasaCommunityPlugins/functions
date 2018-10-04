declare module 'klasa-functions' {

	import {
		Client,
		Piece,
		Store,
		KlasaClientOptions,
		KlasaPieceDefaults,
		PieceOptions
	} from 'klasa';

	class FunctionsClient extends Client {
		public constructor(config: FunctionsClientOptions);
		public functions: FunctionStore;
	}

	export { FunctionsClient as Client };

	export abstract class Function extends Piece {
		public run(): Promise<any>;
	}

	export class FunctionStore extends Store<string, Function, typeof Function> { }

	export type FunctionsClientOptions = {
		pieceDefaults?: FunctionsClientPieceDefaults,
		aliasFunctions?: aliasFunctionsOptions
	} & KlasaClientOptions;

	export type FunctionsClientPieceDefaults = {
		functions?: PieceOptions
	} & KlasaPieceDefaults;

	export type aliasFunctionsOptions = {
		enabled?: boolean,
		returnRun?: boolean,
		prefix?: string
	}

}
