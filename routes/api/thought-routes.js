const router = require('express').Router();

console.log(`Adding thought commands to the DB....`);

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThoughtById,
    removeThoughtById

} = require('../../controllers/thought-controllers');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllThoughts)
  .post(getThoughtById);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(createNewThought)
  .put(updateThoughtById)
  .delete(removeThoughtById);
/*
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);
*/
console.log(`Thought commands successful!`);

module.exports = router;