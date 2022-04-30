const express = require('express');
const router = express.Router();

const {postUser} = require('../controllers/user.controller');
const validateuser = require('../utils/validateUser');

router.post('/',...validateuser(), postUser);
module.exports = router;