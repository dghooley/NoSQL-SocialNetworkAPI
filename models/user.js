const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: 'Please create a username',
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: 'Please enter a valid email address',
            unique: true,
            match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    });

userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('User', userSchema);

module.exports = User;