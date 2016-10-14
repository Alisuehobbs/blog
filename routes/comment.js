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
    knex('posts')
        .leftJoin('comments', 'posts.id', 'comments.posts_id')
        .where('posts.id', req.params.id)
        .then((post) => {
            console.log('Post:', post);
            res.render('comment', {
                post: post,
                post_title: post[0].post_title,
                comment_title: post[0].comment_title,
                content: post[0].content,
                comment: post.comment,
                date_created: post[0].created_at,
                date_updated: post[0].updated_at
            });
        })
});

router.post('/', authorize, (req, res, next) => {
    knex('comments')
        .insert({
            users_id: req.session.userInfo.id,
            posts_id: req.params.id,
            comment_title: req.body.comment_title,
            comment: req.body.comment
        })
        .then((comment) => {
          // console.log('Comment:', comment)
          res.redirect('/comment')
        })
})

module.exports = router;
