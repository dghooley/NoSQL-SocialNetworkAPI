const { Thoughts, User, Reaction } = require('../../models');

const thoughtsController = {
    getAllThoughts(req, res) {
        Thoughts.find({})
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    },

    getThoughtsById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
        .populate({ path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thought found with this id'});
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    createThoughts({ body }, res) {
        Thoughts.create(body)
        .then(dbThoughtsData => {
            User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: dbThoughtsData._id }},
                { new: true }
            )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id '});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
        })
        .catch(err => res.status(400).json(err));
    },

    updateThoughts({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.id },
            body, { new: true }
        )
        .then(dbThoughtsData => {
            if(!dbThoughtsData) {
                res.status(404).json({ message: 'No thought found with this id'});
                return;
            }
            User.findOneAndUpdate(
                { username: dbThoughtsData.username },
                { $pull: { thoughts: params.id }}
            )
            .then(() => {
                res.json({ message: 'Thought deleted successfully'});
            })
            .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    },

    
}

module.exports = thoughtsController;