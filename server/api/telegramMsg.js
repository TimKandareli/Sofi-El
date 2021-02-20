module.exports.sendMsg = (req, res) => {
  let http = require('request')
  let reqBody = req.body
  let fields = [
    '<b>Name</b>: ' + reqBody.name,
    '<b>Phone</b>: ' + reqBody.phone,
    '<b>Message</b>: ' + reqBody.message,
    '<b>Рассчитать стоимость</b>: ' + ((+reqBody.val === 1) ? 'Да' : 'Нет'),
    '<b>Заказать замер</b>: ' + ((+reqBody.val === 0) ? 'Да' : 'Нет'),
  ]
  let msg = ''
  fields.forEach(field => {
    msg += field + '\n'
  });
  msg = encodeURI(msg)
  http.post(`https://api.telegram.org/bot${process.env.TELEGRAM}/sendMessage?chat_id=${process.env.CHAT_ID}&parse_mode=html&text=${msg}`, function (error, response, body) {
    let otvet = 'Ваше сообщение успешно отправлено!'
    if (response.statusCode === 200) {
      res.render('index', { otvet });
    }
    if (response.statusCode !== 200) {
      res.status(400).json({ status: 'error', message: 'Произошла ошибка!' });
    }
  });

}
