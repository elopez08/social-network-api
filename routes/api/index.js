//Router configuration
const router = require('express').Router();

//Files for the other .js files
console.log(`Now loading userRoutes and thoughtRoutes...`);
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//Configuration
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

console.log(`Routes Connected!`);

//Exporting
module.exports = router;