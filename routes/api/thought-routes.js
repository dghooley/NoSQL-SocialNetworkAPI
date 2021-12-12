const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction 
} = require('../../controllers/thought-controller');

router 
    .route('/')
    .get(getAllThoughts)
//    .post(addThoughts);

router
    .route('/:userId')
//    .get(getThoughtsById)
    .put(updateThought)
//    .delete(deleteThoughts);
    .post(addThought)

router.route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(addReaction)
    .delete(deleteThought)

router
    .route('/reaction/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;