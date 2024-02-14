const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deck extends Model {}

Deck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name of the deck
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Foreign key to the user that created the deck
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // Reference the User model
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'deck',
  }
);

module.exports = Deck;
