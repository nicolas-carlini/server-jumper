//express router
const {
    Router
} = require('express');
const router = Router();

//mongodb
const Score = require('../models/Score.model')

router.get('/getScore', async (req, res) => {
    try {
    
        const scoreList = await Score.find().sort({score:-1}).limit(10);

        res.json({
            error:false,
            message:"so good so far",
            scoreList
        });
    } catch (error) {
        res.json({
            error: true,
            message: 'score error, please try again'
        })
    }
})

module.exports = router;