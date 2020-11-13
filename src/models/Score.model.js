const {
    Schema,
    model
} = require('mongoose');


const Score = new Schema({
    userName: String,
    score: Number
})

module.exports = model('Score', Score);
