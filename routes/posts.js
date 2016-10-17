const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const authorize = (req, res, next) => {
    if (!req.session.userInfo) {
        res.render('error', {
            message: "You need to be signed in to access the posts page."
        });
    }
    next();
}

router.get('/', authorize, (req, res, next) => {
  let allPromises = [];
  allPromises.push(
  knex('posts')
      .then((posts) => {
          res.render('posts', {
            posts: posts,
            id: posts.id,
            post_title: posts.post_title,
            content: posts.content,
            date_created: posts.created_at,
            date_updated: posts.updated_at
          })
      }))
      return Promise.all(allPromises);
});


module.exports = router;
