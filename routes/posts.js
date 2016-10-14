const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts')
      .then((posts) => {
        console.log(posts);
          res.render('posts', {
            posts: posts,
            title: posts.title,
            content: posts.content,
            date_created: posts.created_at,
            date_updated: posts.updated_at
          })
      })
});


module.exports = router;
