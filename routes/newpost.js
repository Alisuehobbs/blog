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
    const newPostObject = {
        users_id: req.session.userInfo.id,
        post_title: req.body.post_title,
        content: req.body.content
    }

    if (newPostObject.post_title === "" || newPostObject.content === "") {
        res.send('Please enter both the title and content filed.')
    } else {

        knex('posts')
            .insert(newPostObject, '*')
            .then((newpost) => {
                req.session.postID = newpost[0].id;
                res.redirect('posts')
            })

    }
})



module.exports = router;
