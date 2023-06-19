const router = require('express').Router();
const sequelize = require('../config/connection');
const { Comment, Concept, Favorite, User } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require('sequelize')

router.get('/', withAuth, async (req, res) => {
  var category = ["metalwork", "software", "woodwork", "quilts"];
  var user;

  if (req.query.category){
    category = req.query.category;
  }
  try {
    console.log(req.query);

    const conceptData = await Concept.findAll({
      where: {
          'categories': category,
          [Op.or]: [
            {
              'public': true,
            },
            {
              'user_id': req.session.user_id,
              'public': false
            }
          ],
      },
      order: [['date_created','ASC']],include: [
        {
          model: User,
          attributes: ['username'],
        }]
    });

    console.log("here");

    const concepts = conceptData.map((concept) => concept.get({ plain: true }));
    console.log(concepts);
    console.log("here2");
    res.render('home', {
      concepts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/spark/:id', withAuth, async (req, res) => {
  try {
    const conceptData = await Concept.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['date_created','comment'],
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });
   const concept = conceptData.get({ plain: true });
    console.log(concept)
    res.status(200).json(concept);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
