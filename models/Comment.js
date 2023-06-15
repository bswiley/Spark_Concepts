const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    comment: {
        type: DataTypes.TEXT,
        length: 'medium',
        allowNull: false,
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
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
},
{
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'comment',
});
module.exports = Comment;