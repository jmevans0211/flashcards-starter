const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Game', function() {

    it('should be a function', function() {
      const game = new Game();
      expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        const game = new Game();
        expect(game).to.be.an.instanceof(Game);
    }); 

    it('should increment rounds', function() {
        var game = new Game();
        expect(game.round).to.equal(0) 
        game.start();
        expect(game.round).to.equal(1);
    });

    it('should have 30 cards in the deck at the start of game', function () {
        var game = new Game();
        
        game.start();
      
        expect(game.deck.countCards()).to.equal(30);
    });

});