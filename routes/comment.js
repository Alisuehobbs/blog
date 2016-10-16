const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');

const authorize = (req, res, next) => {
    if (!req.session.userInfo) {
        res.render('error', {
            message: "You need to be signed in to access the comments page."
        });
    }
    next();
}

router.get('/:id', authorize, (req, res, next) => {
    const allPromises = [];
    allPromises.push(
    knex('posts')
        .leftJoin('comments', 'posts.id', 'comments.posts_id')
        .where('posts.id', req.params.id)
        .then((post) => {
            console.log('Post:', post);
            res.render('comment', {
                post: post,
                id: post[0].id,
                posts_id: post[0].posts_id,
                post_title: post[0].post_title,
                comment_title: post[0].comment_title,
                content: post[0].content,
                comment: post.comment,
                date_created: post[0].created_at,
                date_updated: post[0].updated_at
            });
        }))
        return Promise.all(allPromises)
});

router.post('/', authorize, (req, res, next) => {
    const newComment = {
      users_id: req.session.userInfo.id,
      posts_id: req.body.id,
      comment_title: req.body.comment_title,
      comment: req.body.comment
    }

    knex('comments')
        .insert(newComment,'*')
        .then((comment) => {
          const id = comment[0].posts_id
            res.redirect(`/comment/${id}`)
        })
})

// edit post
router.put('/:id', (req, res, next) => {
    const updatedPostObject = {
        users_id: req.session.userInfo.id,
        post_title: req.body.title,
        content: req.body.content
    }

    knex('posts')
        .where('id', req.params.id)
        .update(updatedPostObject, '*')
        .then((thing) => {
          console.log('thing:', thing);
          res.json({'response': 'post updated'})
        })
})

// delete post

router.delete('/:id', (req, res, next) => {
  knex('')
})

// delete comment

module.exports = router;
