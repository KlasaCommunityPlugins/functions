import { Piece } from 'klasa';

/**
 * Base class for all Klasa Functions. See {@tutorial CreatingFunctions} for more information how to use this class
 * to build custom raw events.
 * @tutorial CreatingFunctions
 * @extends external:Piece
 */
export class Function extends Piece {
	run(): any {
		throw new Error(`${this.type}::${this.name}: Run method was not overwritten!`);
	}
}
