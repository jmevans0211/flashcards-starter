const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    takeTurn(guess) {
      var turn = this.makeNewTurn(guess);

      if(guess !== this.returnCurrentCard().correctAnswer) {
          this.incorrectGuesses.push(this.returnCurrentCard().id)
      }
// invoke this.makeNewTurn()
// evaluate if guess returns true or false
// if false, this.incorrectGuesses.push(currentCard)
// add to turn counter
        this.turns++;

        return turn.giveFeedback();
// how to recall this.takeTurn (where does it belong)
// what card are we at? how many left? if none, what happens?
    }

    makeNewTurn(guess) {
        return new Turn(guess, this.returnCurrentCard());
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