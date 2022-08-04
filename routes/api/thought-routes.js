const router = require('express').Router();

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
  .post(createNewThought);
  

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(removeThoughtById);
/*
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);
*/

module.exports = router;