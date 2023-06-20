const router = require("express").Router();
const { Comment, Concept, Favorite, User } = require("../models");
const withAuth = require("../utils/auth");
// const getUser = require("../utils/userid");

router.get('/', withAuth, async (req, res) => {
     try {
   const conceptData = await Concept.findAll({
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
router.get('/spark/:id', withAuth, getUser, async (req, res) => {
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

module.exports = router;
