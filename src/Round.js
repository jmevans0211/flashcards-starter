const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    takeTurn(guess) {
      var turn = this.makeNewTurn(guess);

      if (guess !== this.returnCurrentCard().correctAnswer) {
          this.incorrectGuesses.push(this.returnCurrentCard().id)
      }

        this.turns++;
        return turn.giveFeedback();
    }

    makeNewTurn(guess) {
        return new Turn(guess, this.returnCurrentCard());
    }

    returnCurrentCard() {
        return this.deck[this.turns];
    }

    calculatePercentCorrect() {
        return 100 * ((this.turns - this.incorrectGuesses.length) / this.turns);
    }

    endRound() {
        var percentage = this.calculatePercentCorrect();
        console.log(`**Round over!**You answered ${percentage}% of the questions correctly!`);
    }
}

module.exports = Round;