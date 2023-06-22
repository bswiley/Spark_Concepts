const router = require("express").Router();
const sequelize = require('../config/connection');
const { Comment, Concept, Favorite, User } = require("../models");
const withAuth = require("../utils/auth");
const { Op } = require('sequelize')
// const getUser = require("../utils/userid");

router.get('/', withAuth, async (req, res) => {
  var category = ["metalwork", "software", "woodwork", "quilts"];
  var user;

  if (req.query.category){
    category = req.query.category;
  }
  try {
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
    order: [['date_created','ASC']],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  });


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
      where: {
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
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['createdAt','comment'],
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
    res.render('spark', {concept, logged_in: req.session.logged_in,});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/fav', withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    const favData =  await Favorite.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Concept, 
          include: [User]
        }
      ]
    })
    const favorites = favData.map(favorite => favorite.get({ plain: true }));
    console.log(favorites);
    res.status(200).json(favorites);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get('/myuser/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.session.user_id}, attributes: {exclude: ["password"]} })

    const user = userData.get({ plain: true });
    console.log(user)
    res.render('user', {user, logged_in: req.session.logged_in,});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.params.id}, attributes: {exclude: ["password"]} })

    const user = userData.get({ plain: true });
    console.log(user)
    res.render('user', {user, logged_in: req.session.logged_in,});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// router.get('/spark/:id', withAuth, async (req, res) => {
//   try {
//     const conceptData = await Concept.findByPk(req.params.id, {
//       attributes: ['title', 'text', 'date-created'],
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     // const commentData = await Comment.findAll({
//     //   where: { concept_id: req.params.id },
//     //   include: [
//     //     {
//     //       model: User,
//     //       attributes: ['username'],
//     //     },
//     //   ],
//     // });

//     // const comment = commentData.map((comment) => comment.get({ plain: true }));

//     // Send the response
//     res.render('spark', {
//       concept: conceptData,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get('/create', withAuth, async (req, res) => {
  res.render("create");
});

router.get('/generatespark', withAuth, async (req, res) => {
  res.render("generate");
});

module.exports = router;
