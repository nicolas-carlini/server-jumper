const {
    Schema,
    model
} = require('mongoose');


const Score = new Schema({
    userName: {
        type: String,
        default: 'Player'
    },
    score:{
        type: Number,
        default: 0
    },
    height:{
        type: Number,
        default: 0
    },
    level:{
        type: Number,
        default: 0
    }
})

module.exports = model('Score', Score);
