const { Router } = require("express");
const ctrlTelegram = require('../api/telegramMsg');
const router = Router();
const Category = require('../models/categories')
const Items = require('../models/items')


router.post('/', ctrlTelegram.sendMsg);

router.get("/", async (req, res) => {
  res.render("index");
});

router.get("/shower", async (req, res) => {
  const categoryShowerDescription = await Category.find({path: req.url.slice(1)})
  const allItems = await Items.find({category: req.url.slice(1)})
  res.render("shower", {
    categoryShowerDescription,
    allItems
  });
});

router.get("/doors", async (req, res) => {
  const categoryDoorsDescription = await Category.find({path: req.url.slice(1)})
  const allItems = await Items.find({category: req.url.slice(1)})
  console.log('--------->',categoryDoorsDescription)
  res.render("doors", {
    categoryDoorsDescription,
    allItems
  });
});

router.get("/mirror", async (req, res) => {
  const categoryMirrorDescription = await Category.find({path: req.url.slice(1)})
  const allItems = await Items.find({category: req.url.slice(1)})
  console.log('--------->',categoryMirrorDescription)
  res.render("mirror", {
    categoryMirrorDescription,
    allItems
  });
});

router.get("/euro-mirror", async (req, res) => {
  const categoryEuroMirrorDescription = await Category.find({path: req.url.slice(1)})
  const allItems = await Items.find({category: req.url.slice(1)})
  console.log('--------->',categoryEuroMirrorDescription)
  res.render("euro-mirror", {
    categoryEuroMirrorDescription,
    allItems
  });
});

router.get("/shelves", async (req, res) => {
  const categoryShelvesDescription = await Category.find({path: req.url.slice(1)})
  const allItems = await Items.find({category: req.url.slice(1)})
  console.log('--------->',categoryShelvesDescription)
  res.render("shelves", {
    categoryShelvesDescription,
    allItems
  });
});

router.get("/skinali", async (req, res) => {
  const categorySkinaliDescription = await Category.find({path: req.url.slice(1)})
  const allItems = await Items.find({category: req.url.slice(1)})
  console.log('--------->',categorySkinaliDescription)
  res.render("skinali", {
    categorySkinaliDescription,
    allItems
  });
});


router.get('/auth', async (req, res) => {
  res.render('auth')
})

router.get('/logout', async (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/')
  })
})

router.post('/auth', async (req, res) => {
  const { login, password } = req.body
  if (login === process.env.LOGIN && password === process.env.PASSWORD) {
    req.session.isAuthenticated = 'superGlassAdmin'
    res.redirect('/')
  } else {
    res.send('Не верные данные')
  }
})

router.get('/editItem/:id', async (req, res) => {
  const id = req.params.id
  const currentItem = await Items.findById(id)
  res.render('editItemForm', {
    currentItem
  })
})

router.get('/createItem/:id', async (req, res) => {
  const category = req.params.id
  console.log('==========>', category)
  res.render('createItemForm', {
    category
  })
})

router.post('/update', async (req, res) => {
  const { name, image, hiddenId, imageHidden } = req.body
  console.log('--------->', imageHidden)
  await Items.findByIdAndUpdate({_id: hiddenId}, {$set: {name, image: imageHidden}})
  res.redirect('/')
})

router.post('/create', async (req, res) => {

  const { name, imageHidden, hiddenCategory } = req.body
  await Items.create({name, image: imageHidden, category: hiddenCategory})
  res.redirect('/')
})





module.exports = router;
