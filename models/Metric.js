const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Metric extends Model {}

Metric.init(
  {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      views:{
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        }},
        comments:{
        type: DataTypes.INTEGER, 
        references: {
          model: 'concept',
          key: 'id',
        }},
    favorites:{
        type: DataTypes.INTEGER, 
    }


      
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'metric',
        });
        module.exports = Metric;