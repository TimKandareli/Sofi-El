const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: String, 
  image: String,
  path: String
});

const Categories = mongoose.model('Categories', categorySchema);

async function createCategories() {
  const showers = new Categories({
    name: 'Душевые перегородки', 
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610693827/%D0%B4%D1%83%D1%88%D0%B5%D0%B2%D1%8B%D0%B5_%D0%BF%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BA%D0%B8_g5ws8v.jpg',
    path: 'shower'
  });
  const mirrors = new Categories({
    name: 'Зеркала',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610693825/%D0%B7%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D0%B0_eifpfj.jpg',
    path: 'mirror'
  });
  const doors = new Categories({
    name: 'Межкомнатные двери',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610693825/%D0%BC%D0%B5%D0%B6%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D0%B5_%D0%B4%D0%B2%D0%B5%D1%80%D0%B8_czqifi.jpg',
    path: 'doors'
  });
  const skinali = new Categories({
    name: 'Скинали',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610693826/%D1%81%D0%BA%D0%B8%D0%BD%D0%B0%D0%BB%D0%B8_n5k44d.jpg',
    path: 'skinali'
  });
  const euroMirrors = new Categories({
    name: 'Еврозеркала',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610693825/%D0%B5%D0%B2%D1%80%D0%BE%D0%B7%D0%B5%D1%80%D0%BA%D0%B0%D0%BB%D0%B0_yetc4h.jpg',
    path: 'euro-mirror'
  });
  const shelves = new Categories({
    name: 'Полки, витрины, УФ склейка',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610693824/%D0%BF%D0%BE%D0%BB%D0%BA%D0%B8_%D0%B2%D0%B8%D1%82%D1%80%D0%B8%D0%BD%D1%8B_khywxh.jpg',
    path: 'shelves'
  });

  await Categories.insertMany([mirrors, doors, showers, skinali, euroMirrors, shelves]);

}

// createCategories();


module.exports = Categories

