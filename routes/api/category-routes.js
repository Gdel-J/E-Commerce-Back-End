const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


//get all category with try catch
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      attributes: ["id", "category_name"],
      include: [{
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"]
      }]
    })
    if (!categoryData) {
      res.status(404).json({ message: 'No categories found' });
      return;
    }
    return  res.status(200).json(categoryData) ;

  } catch (err) {
    res.status(500).json(err);
  }

})



router.get('/:id', async (req, res) => {
  try {
    const categoryFindOne = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    });

    if (!categoryFindOne) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }

    res.status(200).json(categoryFindOne);
  } catch (err) {
    res.status(500).json(err);
  }
});

  



router.post('/', async (req, res) => {
  // create a new category

try {
  const categoryCreate = await Category.create({
    category_name: req.body.category_name
  })
  res.status(200).json(categoryCreate);

} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', async (req, res) => {
  try {
    const categoryUpdate = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
//checking if no category was found with the specified id  " if (categoryUpdate[0] === 0)" or if the update operation did not modify any category.
    if (categoryUpdate[0] === 0) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value

try {
const categoryDestroy = await Category.destroy({
  where: {
    id: req.params.id
  }
})
if (!categoryDestroy) {
  res.status(404).json({ message: 'No category found with that id.'});
  return;
}
res.status(200).json(categoryDestroy);
} catch (err) {
res.status(500).json(err);
}
});




module.exports = router;