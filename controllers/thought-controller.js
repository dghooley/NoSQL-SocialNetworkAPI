const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
//        .populate({ path: 'reactions', select: '-__v' })
//        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
//        .populate({ path: 'reactions', select: '-__v'})
//        .select('-__v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    addThought({ body }, res) {
//        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No user found with this id '});
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
        },
//        .catch(err => res.status(400).json(err));

    updateThought({ params, body }, res) {
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

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought found with this id'});   
            }
            return User.findOneAndUpdate(
                { _id: params.userId},
                { new: true},
                { $pull: { thoughts: params.thoughtId }}
            );
        })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                res.status(404).json({ message: 'Thought deleted successfully'})
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body }},
            { new: true, runValidators: true}
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id'});
                return; 
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err))
    },

    deleteReaction({ params }, res) {
        Thought.findOneAndDelete(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId }}},
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    }  
};

module.exports = thoughtController;