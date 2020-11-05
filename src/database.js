const mongoose = require('mongoose');
const DB = process.env.DB;

mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => {
        console.log('DataBase is connected')
    })