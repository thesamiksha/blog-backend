const express = require('express');
const router = express.Router();
const { getPosts, addPost } = require('../services/dynamodb');

router.get('/', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = await addPost(title, content);
  res.status(201).json(post);
});

module.exports = router;
