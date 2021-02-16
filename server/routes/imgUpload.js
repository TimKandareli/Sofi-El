const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
// const Items = require('../models/items');
// const Categories = require('../models/categories');


  
// INITIALIZING IMAGE STORAGE
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  }
})

// IMAGE UPLOAD
router.use(multer({storage:storage}).single("myImage"));

router.get('/', (req, res) => {
  res.render('test')
})

router.post('/', (req, res) => {
  console.log(req.file);
  let myImagePath = req.file.path;
  // const itemImage = new Items({ imgUrl: myImagePath });
  // itemImage.save();

  if (!myImagePath) {
    res.send('Ошибка при загрузке файла.');
  } else {
    res.render('test', {myImagePath})
  }
      
})

module.exports = router
