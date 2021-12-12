const mongoose = require('mongoose');
const express = require('express');
const apiRoutes = require('./routes/api')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGO_URI || 'monogdb://localhost:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
//    useFindAndModify: false
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));