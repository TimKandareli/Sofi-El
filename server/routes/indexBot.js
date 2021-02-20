let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('indexBot', { title: 'Оставьте Вашу заявку здесь, мы с вами обязательно свяжемся' });
});

const ctrlTelegram = require('../api/telegramMsg');
router.post('/', ctrlTelegram.sendMsg);

module.exports = router;
