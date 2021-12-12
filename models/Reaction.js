/*
const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');
const moment = require('moment');
// const { truncate } = require('fs');

const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 200
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
{
    toJSON: {
        getters: true
    },
    id: false
});


const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;
*/