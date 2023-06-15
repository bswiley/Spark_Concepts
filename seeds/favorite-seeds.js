const { Favorite } = require('../models');

const favoriteData = [
  {
    user_id: 4,
    concept_id: 4,
    count1: 21,
    count2: 50
  },
  {
    user_id: 5,
    concept_id: 5,
    count1: 22,
    count2: 60
  },
  {
    user_id: 2,
    concept_id: 1,
    count1: 12,
    count2: 40
  },
  {
    user_id: 2,
    concept_id: 3,
    count1: 11,
    count2: 45
  },
  {
    user_id: 3,
    concept_id: 1,
    count1: 10,
    count2: 35
  },
  {
    user_id: 2,
    concept_id: 4,
    count1: 5,
    count2: 30
  },
  {
    user_id: 1,
    concept_id: 2,
    count1: 15,
    count2: 25
  },
  {
    user_id: 1,
    concept_id: 3,
    count1: 25,
    count2: 22
  },
  {
    user_id: 3,
    concept_id: 2,
    count1: 28,
    count2: 21
  },
];

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;
