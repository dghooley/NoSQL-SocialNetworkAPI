const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const moment = require('moment');

const thoughtsSchema = new Schema({
    thoughtsText: {
        type: String,
        required: true,
        minLength: 1,
        maxlength: 200,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
});

thoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;