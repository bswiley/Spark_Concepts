const router = require('express').Router();
const { Comment, Concept, Favorite, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const conceptData = await Concept.findAll({
      order: ['date_created'],include: [
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

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
