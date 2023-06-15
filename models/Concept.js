const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Concept extends Model {}

Concept.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
  },
  public: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  
  outsideLink:{
    type: DataTypes.STRING,
  },
  ChatLink: {
    type: DataTypes.STRING,
  },
  categories: { 
    type: DataTypes.STRING,
    
  },
  date_created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  views: {
    type: DataTypes.INTEGER,
  }
},
  
 {,
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'concept',
  }
);

module.exports = Concept;
