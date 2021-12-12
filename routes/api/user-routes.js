const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend 
} = require('../../controllers/user-controller');

router  
    .route('/')
    .get(getAllUsers)
    .post(addUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route('/friends/:id/:friendId')
    .put(addFriend)
    .delete(deleteFriend)

module.exports = router;