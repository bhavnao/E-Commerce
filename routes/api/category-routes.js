const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


  // find all categories
  // be sure to include its associated Products
  router.get('/', (req, res) => {
    Category.findAll({
      include: [Product]
    })
      .then((categories) => res.status(200).json(categories))
      .catch((err) => res.status(500).json(err));
  });


  // find one category by its `id` value
  // be sure to include its associated Products
  router.get('/:id', async (req, res) => {
    try {
      const categories = await Category.findByPk(req.params.id, {
        // JOIN with travellers, using the Trip through table
        include: [Product]
      });
  
      if (!categories) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  });



  // create a new category
  router.post('/', async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// update a category by its `id` value
router.put('/:id', (req, res) => {  
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json({message: "category updated"}))
    .catch((err) => res.status(400).json(err));
});


  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const category = await Category.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!category) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json({message: "category deleted"});
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
