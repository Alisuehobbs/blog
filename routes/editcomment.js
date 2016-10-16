var express = require('express');
var router = express.Router();
const knex = require('../db/knex.js');

const authorize = (req, res, next) => {
    if (!req.session.userInfo) {
        res.render('error', {
            message: "You need to be signed in to access the comments page."
        });
    }
    next();
}

router.get('/:id', (req, res, next) => {
    knex('comments')
        .where('id', req.params.id)
        .then((comment) => {
            res.render('editcomment', {
                comment: comment,
                id: comment[0].id,
                posts_id: comment[0].posts_id,
                comment_title: comment[0].comment_title,
                comment: comment[0].comment
            })
        });
})

router.put('/:id', (req, res, next) => {
    const updatedCommentObject = {
        users_id: req.session.userInfo.id,
        posts_id: req.body.posts_id,
        comment_title: req.body.title,
        comment: req.body.comment
    }

    knex('comments')
        .where('id', req.params.id)
        .update(updatedCommentObject, '*')
        .then((thing) => {
          console.log('thing:', thing);
          res.json({'response': 'post updated'})
        })
})

router.delete('/:id', authorize, (req, res, next) => {
  knex('comments')
      .where('id', req.params.id)
      .delete()
      .then(() => {
        res.json({'response': 'post deleted'})
      })
})

module.exports = router;
