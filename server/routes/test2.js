const express = require('express');
const router = express.Router();
const axios = require('axios')

router.use('/', (req, res) => {
  res.render('test2')
})

module.exports = router
