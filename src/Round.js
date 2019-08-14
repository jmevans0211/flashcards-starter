const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    takeTurn() {
// invoke this.makeNewTurn()
// evaluate if guess returns true or false
// if false, this.incorrectGuesses.push(currentCard)
// add to turn counter
        this.turns++;
// how to recall this.takeTurn (where does it belong)
// what card are we at? how many left? if none, what happens?
    }

    makeNewTurn() {
        return new Turn(guess, cardObj);
    }

    returnCurrentCard(deck) {
        return this.deck[this.turns];
    }

    calculatePercentCorrect() {
        // calculates a percentage of correct guesses
    }

    endRound() {
        // returns `**Round over!**You answered <>% of the questions correctly!`
    }
}

module.exports = Round;