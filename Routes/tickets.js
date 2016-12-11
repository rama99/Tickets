const express = require('express');
const router = express.Router();


router.get('/create' , (req , res , next) => {
    res.send('create ticket');
})

module.exports = router;