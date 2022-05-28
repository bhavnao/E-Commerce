const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


  // find all tags
  // be sure to include its associated Product data
  router.get('/', (req, res) => {
    Tag.findAll({
      include: [
        {model: Product,through: ProductTag},        
      ],
    })
      .then((tags) => res.status(200).json(tags))
      .catch((err) => res.status(500).json(err));
  });


  // find a single tag by its `id`
  // be sure to include its associated Product data
  router.get('/:id', async (req, res) => {
    try {
      const tags = await Tag.findByPk(req.params.id, {
        // JOIN with travellers, using the Trip through table
        include: [{ model:Product, through: ProductTag }]
      });
  
      if (!tags) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
  
      res.status(200).json(tags);
    } catch (err) {
      res.status(500).json(err);
    }
  });





  // create a new tag
  router.post('/', async (req, res) => {
    try {
      const newTag = await Tag.create(req.body);
      res.status(200).json(newTag);
    } catch (err) {
      res.status(400).json(err);
    }
  
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {  
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json({message: 'Tag updated'}))
    .catch((err) => res.status(404).json(err));
});


  // delete on tag by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const tag = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!tag) {
        res.status(404).json({ message: 'No tag found with this id!' });
        return;
      }
  
      res.status(200).json({message: 'Tag deleted'});
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
