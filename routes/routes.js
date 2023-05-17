const express = require('express');
const { getComments, getPosts } = require('../controllers/app.controller')
const router = express.Router();

router.get('/', getComments)
router.get('/', getPosts)

module.exports = router