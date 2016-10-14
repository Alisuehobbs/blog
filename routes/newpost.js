const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const authorize = (req, res, next) => {
    console.log('req.session.userInfo =', req.session.userInfo);
    if (!req.session.userInfo) {
        res.render('error', {
            message: "You need to be signed in to write a new post."
        });
    }
    next();
}

router.get('/', authorize, (req, res, next) => {
    res.render('newpost')
});

router.post('/', authorize, (req, res, next) => {
    knex('posts')
        .insert({
            users_id: req.session.userInfo.id,
            post_title: req.body.post_title,
            content: req.body.content
        })
        .then((newpost) => {
            res.redirect('posts')
        })
})



module.exports = router;
