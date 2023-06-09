const User = require('./User');
const Concept = require('./Concept');
const Comment = require('./Comment');

User.hasMany(Concepts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
