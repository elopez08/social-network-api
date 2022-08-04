//Router configuration
const router = require('express').Router();

//Files for the other .js files
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//Configuration
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//Exporting
module.exports = router;