const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags with its associated Product data

 try {
    const tagData = await Tag.findAll({
      
      include: {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id'],
      },
      
    })
    if (!tagData) {
      res.status(404).json({ message: 'No products found' });
      return;
    }
    return res.status(200).json(tagData);

  } catch (err) {
    res.status(500).json(err);
  }

});



router.get('/:id', async (req, res) => {
  // find a single tag by its `id` with its associated Product data

  try {
    const TagFindOne = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id'],
      },
      
    })
   if (!TagFindOne) {
   res.status(404).json;
   return;
}
res.status(200).json(TagFindOne);
  } catch (err) {
  res.status(500).json(err);
}

});



router.post('/', async (req, res) => {
  // create a new tag

try {
  const tagCreate = await Tag.create({
    tag_name: req.body.tag_name
  })
  res.status(200).json(tagCreate);

} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value

 try {
  const tagUpdate = await Tag.update(req.body, {
    where: {
      id: req.params.id
    },
  })
  if (tagUpdate[0] === 0){
    res.status(404).json({ message: 'No tag found  with that id!' });
    return;
  }
  res.status(200).json(tagUpdate);
} catch (err) {
  res.status(500).json(err);
}
});


router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
try {
const tagDestroy = await Tag.destroy({
  where: {
    id: req.params.id
  }
})
if (!tagDestroy) {
  res.status(404).json({ message: 'No tag found with that id.'});
  return;
}
res.status(200).json(tagDestroy);
} catch (err) {
res.status(500).json(err);
}
});


module.exports = router;
