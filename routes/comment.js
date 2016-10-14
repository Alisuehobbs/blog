const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    knex('posts')
        .join('comments', 'posts.id', 'comments.posts_id')
        .where('posts.id', 1)
        // .first()
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

router.post('/', (req, res, next) => {
    knex('comments')
        .insert({
            users_id: 1,
            posts_id: 1,
            comment_title: req.body.comment_title,
            comment: req.body.comment
        })
        .then((comment) => {
          console.log('Comment:', comment)
          res.redirect('/comment')
        })
})

module.exports = router;
