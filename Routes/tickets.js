const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const co = require('co-express');

router.get('/create' , (req , res , next) => {
    res.send('create ticket');
})

router.get('/severities' , co (function *(req , res , next) {   

        let severities = yield ticketsCtrl.severities(req , res , next);
        res.json(severities);
}))

router.get('/statuses' , co (function *(req , res , next) {

    let statuses = yield ticketsCtrl.statuses(req , res , next);
    res.json(statuses);    
}));

module.exports = router;