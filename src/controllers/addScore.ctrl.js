//express router
const {
  Router
} = require('express');
const router = Router();

//mongodb
const Score = require('../models/Score.model')

router.post('/addScore',async (req, res) => {
  try {
    const { userName, score, height = 0 } = req.body;

    console.log(req.body);

    let newScore = new Score({
      'userName':   userName,
      'score': score,
      'height': height,
      'level': Math.ceil(height/1000)
    })
    
    await newScore.save();

    res.json({
      error: false,
      message: 'so good so far'
    })
  } catch (error) {
    console.log(error)
    res.json({
      error: true,
      message: 'score error, please try again'
    })
  }
})

module.exports = router;