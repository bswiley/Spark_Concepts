const router = require('express').Router();
const { Comment, Concept, Favorite, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/concept', withAuth, async (req, res) => {
  try {
    const conceptData = await Concept.create({
      "title": req.body.title,
      "text": req.body.text,
      "user_id": req.session.user_id,
      "public": req.body.public,
      "outsideLink": req.body.outsideLink,
      "ChatLink": req.body.ChatLink,
      "categories": req.body.categories,
      "views": 0
    });
    res.status(204).json("");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/concept/:id', withAuth, async (req, res) => {
  try {
    const conceptData = await Concept.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ['username'],
      },
    });
    const concept = conceptData.get({ plain: true });
    console.log(concept);

    res.status(200).json(concept);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Comments Get
router.get('/comment/:id', withAuth, async (req, res) => {
  console.log(req.query);
  
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ['username'],
      },
    });

    console.log("here");
    const comments = commentData.get({ plain: true });
    console.log(comments);
    console.log("here2");

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Comments Get
router.get('/comments', withAuth, async (req, res) => {
  console.log(req.query);
  
  try {
    const commentData = await Comment.findAll({
      include: {
        model: User,
        attributes: ['username'],
      },
    });

    console.log("here");
    const comments = commentData.get({ plain: true });
    console.log(comments);
    console.log("here2");

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Comments post
router.post('/comment/:id', withAuth, async (req, res) => {
  console.log(`post request to comments`);
  console.log(`"comment": ${req.body.comment}, "user_id": ${req.session.user_id}, "concept_id": ${req.params.id}`);

  try {
    const conceptData = await Comment.create({
      comment: req.body.comment,
      user_id: req.session.user_id,
      concept_id: req.params.id,
    });
    console.log(conceptData.toJSON());
    res.status(204).json("");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

});

module.exports = router;
