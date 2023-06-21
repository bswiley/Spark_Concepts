const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

/**
 * Gets a user that matches the desired username
 */
router.get('/:username', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { id: req.params.username}, attributes: {exclude: ["password"]} });
    if(userData == null){
      res.status(200).json({});
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
/**
 * Update a username
 */
router.put('/:username', withAuth, async (req, res) => {
  try {
    if(req.params.username != req.session.user_name){
      res.status(403).json("you are not authorized");
      return;
    }
    const userData = await User.findOne({ where: { username: req.params.username}});
    await userData.update(req.body);
    res.status(204).json("data posted");
  } catch (err) {
    res.status(400).json(err);
  }
});
/**
 * Login call which looks up username and hashed password
 */
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
/**
 * Tries to add a new user based on inputted data
 */
router.post('/signup', async (req, res) => {
  try {
    const checkData = await User.findOne({ where: { email: req.body.email } });
    console.log(checkData);
    if (checkData != null){
      res.status(403).json("Email already exists");
      return;
    }
    else if (req.body.password.length < 8){
      res.status(403).json("password error");
      return;
    }
    else{
      console.log(req.body);
      const userData = await User.create(req.body);
      req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
    }
    

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
