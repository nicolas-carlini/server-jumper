//express router
const {
    Router
} = require('express');
const router = Router();

//mongodb
const Score = require('../models/Score.model')

router.get('/getScoreByLevel', async (req, res) => {
    try {
        
        const { level } =  req.body;
    
        const scoreList = await Score.find({ 'level':level }).sort({score:-1}).limit(50);

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