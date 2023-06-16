const router = require('express').Router();
const { Comment, Concept, Favorite, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const conceptData = await Concept.findAll({
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
          attributes: ['comment', 'createdAt'],
          include: [
            { 
              model: User,
              attributes: ['username'],
            }
          ]
        }
      ]
    });

    console.log("here");

    const concept = conceptData.get({ plain: true });
    const comment = commentData.get({ plain: true });
    console.log(concept);
    console.log(comment);
    console.log("here2");

    res.render('spark', {
      concept,
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
