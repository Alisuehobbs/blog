const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('newpost')
});

router.post('/', (req, res, next) => {
    knex('posts')
        .insert({
            users_id: 1,
            post_title: req.body.post_title,
            content: req.body.content
        })
        .then((newpost) => {
            console.log('New Post:', newpost);
            res.redirect('posts')
        })
})



module.exports = router;
