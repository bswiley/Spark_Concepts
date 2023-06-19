// import models
const Concept = require('./Concept');
const Comment = require('./Comment');
const Favorite = require('./Favorite');
const User = require('./User');


// Concepts belongsTo User
Concept.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many Concepts
User.hasMany(Concept, {
foreignKey: 'user_id',
onDelete: 'CASCADE',
});

// Comments belongsTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// User has many Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Concepts have many Comments
Concept.hasMany(Comment, {
  foreignKey: 'concept_id',
  
});
// Comments belong to Concepts
Comment.belongsTo(Concept, {
  foreignKey: 'concept_id',
  onDelete: 'CASCADE',
});

// Concepts have many Users (through Favorite)
Concept.belongsToMany(User, {
  through: Favorite,
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Users belongToMany Concepts (through Favorite)
User.belongsToMany(Concept, {
  through: Favorite,
  foreignKey: 'concept_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Concept,
  Comment,
  Favorite,
  User,
};