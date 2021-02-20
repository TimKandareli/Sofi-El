const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

router.use(multer({storage:storage}).single("myImage"));

router.get('/', (req, res) => {
  res.render('test')
})

router.post('/', (req, res) => {
  console.log(req.file);
  let myImagePath = req.file.path;

  if (!myImagePath) {
    res.send('Ошибка при загрузке файла.');
  } else {
    res.render('test', {myImagePath})
  }

})

module.exports = router
