const express = require('express');
const router = express.Router();
const upload = require('../utils/file-upload')
const {postSingleImage,postMultipleImage} = require('../controllers/product.controller')

router.post('/single',upload.single("productImages"),postSingleImage);
router.post('/multiple',upload.array("productImages"),postMultipleImage);
module.exports = router;