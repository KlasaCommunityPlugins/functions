const { Piece } = require('klasa');

/**
 * Base class for all Klasa Functions. See {@tutorial CreatingFunctions} for more information how to use this class
 * to build custom raw events.
 * @tutorial CreatingFunctions
 * @extends external:Piece
 */
class Function extends Piece {

	/**
	 * The run method to be overwritten in actual function handlers
	 * @since 0.0.1
	 * @param {*} param The function params provided
	 * @returns {void}
	 * @abstract
	 */
	run() {
		// Defined in extension Classes
		throw new Error(`The run method has not been implemented by ${this.type}:${this.name}.`);
	}

}

module.exports = Function;
