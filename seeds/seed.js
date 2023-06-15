const sequelize = require('../config/connection');
const { User } = require('../models');
const seedComments = require('./comment-seeds');
const seedConcepts = require('./concept-seeds');
const seedFavorites = require('./favorite-seeds');

const userData = require('./userData.json');




const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
await seedConcepts(); 
await seedComments();
await seedFavorites();
  process.exit(0);

  
};

seedDatabase();

