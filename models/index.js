const User = require('./User');
const Deck = require('./Deck');
const Flashcard = require('./Flashcard');

User.hasMany(Deck, {
  foreignKey: 'userId', 
  onDelete: 'CASCADE'
});

Deck.belongsTo(User, {
  foreignKey: 'userId'
});

Deck.hasMany(Flashcard, {
  foreignKey: 'deckId',
  onDelete: 'CASCADE'
});

Flashcard.belongsTo(Deck, {
  foreignKey: 'deckId'
});

module.exports = { User, Deck, Flashcard };
