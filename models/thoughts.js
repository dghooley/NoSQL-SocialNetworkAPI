const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;