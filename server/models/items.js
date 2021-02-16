const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String, image: String, category: String
});

const Items = mongoose.model('Items', itemSchema);

async function createItems() {
  // Showers
  const raspashnyeShowers = new Items({
    name: 'Распашные',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610698365/dushevye-kabiny-iz-stekla_acktri.jpg',
    category: 'shower'
  });
  const razdvizhnyeShowers = new Items({
    name: 'Раздвижные',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610698433/Vesta-DWD-S-v05_fix_01-1_koudlb.jpg',
    category: 'shower'
  });
  const noDoorsShowers = new Items({
    name: 'Без дверей', image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610698519/24_w2tika.jpg',
    category: 'shower'
  });

  // Doors
  const raspashnyeDoors = new Items({
    name: 'Распашные',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610698615/534037457_w640_h640_skrytye-steklyannye-dveri_ypi2ot.jpg',
    category: 'doors'
  });
  const razdvizhnyeDoors = new Items({
    name: 'Раздвижные',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610698632/e43051c3d0cb75dca12ed22802b6c93e_va9ivu.jpg',
    category: 'doors'
  });

  // Mirrors
  const nastennyeMirrors = new Items({
    name: 'Настенные',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610699160/79b29a15d72a398508de6d1ec49516e1_in75ay.jpg',
    category: 'mirror'
  });
  const vlagostojkieMirrors = new Items({
    name: 'Влагостойкие',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610699180/HTB1nXYflrsrBKNjSZFpq6AXhFXaW_ctc8uy.jpg',
    category: 'mirror'
  });

  const zerkalnoePannoMirrors = new Items({
    name: 'Зеркальное панно',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610699201/157_15_1__qg90hx.jpg', category: 'mirror'
  });

  // Euro mirrors
  const mirrorsPodsvetka = new Items({
    name: 'Зеркала с подсветкой',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610699415/12663-zerkalo-s-podsvetkoj-vanda-lux-90-ot-inmyroom_d4snjw.jpg',
    category: 'euro-mirror'
  });

  const mirrorsPodogrev = new Items({
    name: 'Зеркала с подогревом',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610699443/349605_qpmx8a.jpg', category: 'euro-mirror'
  });

  // Shelves
  const shelves = new Items({
    name: 'Полки', image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700163/265656_vplizy.jpg',
    category: 'shelves'
  });
  const shkafyIVitriny = new Items({
    name: 'Шкафы и витрины',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700176/HLB1mAyvRpYqK1RjSZLeq6zXppXaA_feypzr.jpg',
    category: 'shelves'
  });
  const stolyStoiky = new Items({
    name: 'УФ склейка, столы, стойки',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700191/stekljannyeshkafyistelazhi48-555x777_yfshah.jpg',
    category: 'shelves'
  });
  const testShelve = new Items({
    name: 'Test shelve',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700191/stekljannyeshkafyistelazhi48-555x777_yfshah.jpg',
    category: 'shelves'
  });


  // Skinali
  const prozrachnuyeFartuki = new Items({
    name: 'Прозрачные фартуки', image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700574/8881_u9zmhh.jpg',
    category: 'skinali'
  });
  const fotoPechat = new Items({
    name: 'Фотопечать', image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700586/image-89-2_xdffeg.jpg',
    category: 'skinali'
  });
  const krashenyeFartuki = new Items({
    name: 'Крашенвые фартуки',
    image: 'https://res.cloudinary.com/dcyb1gsma/image/upload/v1610700598/wet-bar-backsplash-designs_fd0usl.jpg',
    category: 'skinali'
  });

  await Items.insertMany(
    [raspashnyeShowers, razdvizhnyeShowers, noDoorsShowers, raspashnyeDoors, razdvizhnyeDoors, nastennyeMirrors,
      vlagostojkieMirrors, zerkalnoePannoMirrors, mirrorsPodsvetka, mirrorsPodogrev, shelves, shkafyIVitriny,
      stolyStoiky, prozrachnuyeFartuki, fotoPechat, krashenyeFartuki, testShelve]);
}

module.exports = Items;
