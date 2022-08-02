const router = require('express').Router();

console.log(`Initiating User commands...`);

const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    removeUserById

} = require('../../controllers/user-controllers');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createNewUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUserById)
  .delete(removeUserById);
/*
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);
*/
console.log(`User command successful!`);

module.exports = router;