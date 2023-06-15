const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      count1:{
      type: DataTypes.INTEGER,
    },
      count2:{
      type: DataTypes.INTEGER, 
    },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
      },
    },
    concept_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'concept',
        key: 'id',
      },
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorite',
  }
);

module.exports = Favorite;
