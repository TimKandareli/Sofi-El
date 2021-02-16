module.exports.sendMsg = (req, res) => {
  //токен и id чата берутся из config.json
  const config = require('../config/config.json');
  let http = require('request')
  let reqBody = req.body
  //каждый элемент обьекта запихиваем в массив
  let fields = [
    '<b>Name</b>: ' + reqBody.name,
    '<b>Phone</b>: ' + reqBody.phone,
    '<b>Message</b>: ' + reqBody.message,
    '<b>Рассчитать стоимость</b>: ' + ((+reqBody.val === 1) ? 'Да' : 'Нет'),
    '<b>Заказать замер</b>: ' + ((+reqBody.val === 0) ? 'Да' : 'Нет'),
  ]
  let msg = ''
  //проходимся по массиву и склеиваем все в одну строку
  fields.forEach(field => {
    msg += field + '\n'
  });
  //кодируем результат в текст, понятный адресной строке
  msg = encodeURI(msg)
  //делаем запрос
  http.post(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
    //не забываем обработать ответ
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    let otvet = 'Ваше сообщение успешно отправлено!'
    if (response.statusCode === 200) {
      res.render('index', { otvet });
      // res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' });
    }
    if (response.statusCode !== 200) {
      res.status(400).json({ status: 'error', message: 'Произошла ошибка!' });
    }
  });

}
