const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup')
});

router.post('/', (req, res, next) => {

    const hashed_password = bcrypt.hashSync(req.body.password, 8)

    const newUserObj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        user_name: req.body.user_name,
        image: req.body.image,
        hashed_password: hashed_password
    }

    let allPromises = [];
    allPromises.push(

    knex('users')
        .insert(newUserObj, '*')
        .then((users) => {
            console.log('Users:', users);
            const id = users[0].id
            console.log('id is:', id);
            knex('users')
                .where('id', id)
                .first()
                .then((returnUserObject) => {
                    req.session.userInfo = returnUserObject;
                    res.redirect('posts')
                })
        }))
    return Promise.all(allPromises)
})



module.exports = router;
