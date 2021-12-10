const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Network = model('Network', NetworkSchema);

module.exports = Network;