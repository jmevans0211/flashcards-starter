const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function() {

    it('should be a function', function() {
      const deck = new Deck();
      expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function() {
        const deck = new Deck();
        expect(deck).to.be.an.instanceof(Deck);
      }); 
    
    it('should store cards in deck', function() {
        const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const card2 = new Card({id: 2, question: 'What complex data type allows us to store lists of information?', answers: ['object', 'array', 'function'], correctAnswer: 'array'});
        const card3 = new Card({id: 3, question: 'What is a set of statements that perform a task or calculates a value?', answers: ['object', 'array', 'function'], correctAnswer: 'function'}); 
        const deck = new Deck([card1, card2, card3]);

        expect(deck.cards).to.eql([card1, card2, card3]);
    });

    it('should count cards in deck', function() {
        const card1 = new Card({id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'});
        const card2 = new Card({id: 2, question: 'What complex data type allows us to store lists of information?', answers: ['object', 'array', 'function'], correctAnswer: 'array'});
        const card3 = new Card({id: 3, question: 'What is a set of statements that perform a task or calculates a value?', answers: ['object', 'array', 'function'], correctAnswer: 'function'}); 
        const deck = new Deck([card1, card2, card3]);

        deck.countCards();
        expect(deck.countCards()).to.equal(deck.cards.length);
    });

});
