const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
    this.currentCards = [];
    this.currentRound;
    this.deck;
    this.round = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.currentCards = prototypeQuestions.map(card => new Card(card));
    this.deck = new Deck (this.currentCards);
    this.currentRound = new Round(this.deck, this);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.round++;
  }


}

module.exports = Game;