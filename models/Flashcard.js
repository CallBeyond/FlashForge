const sequelize = require('../config/connection');

class Flashcard extends Model {}

Flashcard.init(
  {const { Model, DataTypes } = require('sequelize');

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    front: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    back: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deckId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // Reference the Deck model
        model: 'deck', 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'flashcard',
    freezeTableName: true,
  }
);

module.exports = Flashcard;
