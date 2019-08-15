const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

var card1, card2, card3, deck, round;
beforeEach(() => {
    card1 = new Card({
        "id": 1,
        "question": "What allows you to define a set of related information using key-value pairs?",
        "answers": ["object", "array", "function"],
        "correctAnswer": "object"
      });
    card2 = new Card({
        "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"
      });
    card3 = new Card({
        "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"
      }); 
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
});

    describe('Round', function() {
    
        it('should be a function', function() {
            expect(Round).to.be.a('function');
        });
    
        it('should be an instance of Round', function() {
            expect(round).to.be.an.instanceof(Round);
        }); 

        it('should be able to access cards in deck', function() {
            expect(round.deck).to.eql([card1, card2, card3]);
        });

        it('should return the first card in the deck', function() {
            round.returnCurrentCard(deck);
            expect(round.returnCurrentCard(deck)).to.eql(card1);
        });
        
        it('should increment the amount of turns', function() {
            expect(round.turns).to.be.equal(0);
            round.takeTurn();
            expect(round.turns).to.be.equal(1);
            round.takeTurn();
            expect(round.turns).to.be.equal(2);
        });

        it('should push card into incorrectGuesses array when guess is incorrect', function() {
            var feedback = round.takeTurn('wrong guess')
            expect(feedback).to.be.equal('incorrect!');

            expect(round.incorrectGuesses.length).to.be.equal(1);
        });
});