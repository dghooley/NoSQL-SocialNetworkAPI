const mongoose = require('mongoose');
const express = require('express');
const apiRoutes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nosql-socialnetworkapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));