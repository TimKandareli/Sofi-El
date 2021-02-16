const express = require('express');
const router = express.Router();


router.use('/', (req, res) => {
  res.render('yandexApi')
})
module.exports = router
