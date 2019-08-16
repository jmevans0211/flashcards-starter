const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Turn = require('../src/Turn')
const Round = require('../src/Round')
const Deck = require('../src/Deck')

class Game {
  constructor() {
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
    // var deck = new Deck(prototypeQuestions);
    this.makeDeck();
    // var round = new Round(deck);
    this.makeRound();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
    this.round++;
  }

  makeDeck() {
    this.deck = new Deck(prototypeQuestions.map((card) => {
      return new Card(card);
    }));
  }

  makeRound() {
    this.currentRound = new Round(this.deck)
  }

}

module.exports = Game;