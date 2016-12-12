const express = require('express');
const router = express.Router();
const co = require('co-express');
const usersCtrl = require('../controllers/users');

router.post('/login' , co( function * (req , res , next) {
   return yield usersCtrl.validateLogin(req , res , next);
}))

module.exports = router;