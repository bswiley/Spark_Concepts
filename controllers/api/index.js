const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sparkRoutes = require('./sparkRoutes');

router.use('/users', userRoutes);
router.use('/projects', sparkRoutes);

module.exports = router;
