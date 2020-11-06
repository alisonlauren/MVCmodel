const express = require('express');
const router = express.Router();
const models = require('../models');

//get all posts
//get /api/v1/posts/
router.get('/', function(req, res) {
  models.Post.findAll()
    .then(posts => {
      res.json(posts)
    })
});

//Get 1 Post by ID
router.get('/:id', (req, res) => {
  models.Post.findByPk(req.params.id)
      .then((post) => {
        if(post){
        res.json(post)
    } else {
      res.status(404).json({
        error: "Post Not Found"
      })
    }
  })
})

//Create new Post
router.post('/', (req, res) => {
  if (!req.body || !req.body.author || !req.body.title || !req.body.content || !req.body.published) {
    res.status(400).json({
      error: "Please Submit All Required Fields"
    })
    return;
  }

  models.Post.create({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    published: req.body.published
  })
  .then(post => {
    res.status(201).json(post)
  })

})

//Update Post
//put /api/
router.post('/:id', (req, res) => {
  if (!req.body || !req.body.author || !req.body.title || !req.body.content || !req.body.published) {
    res.status(400).json({
      error: "Please Submit All Required Fields"
    })
    return;
  }
  models.Post.update({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
    published: req.body.published
  }, {
    where: {
      id: req.params.id
    }
  }) 
  .then(updated => {
    if (updated && updated[0] === 1) {
    res.status(202).json({
      success: "Post Updated"
    });
  } else {
    res.status(404).json({
      error: "Post Not Found"
    })
  }
  })
})

//Delete Post
router.destroy('/:id', (req, res) => {
  models.Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(deleted => {
      if (deleted === 1) {
        res.status(202).json({
          success: "Post Deleted";
        });
      } else {
        res.status(404).json({
          error: "Post Not Found"
        })
      }
    })
})

module.exports = router;
