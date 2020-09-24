const express = require('express');
const router = express.Router();
const _ = require('lodash');
const getIp = require('ipware');
const User = require('../models/User');

router.get('/', async (req, res)=>{
    const user = await User.find();
    res.send(user);
});

router.get('/back', async (req, res)=>{
    const user = await User.find();
    res.render('users', {users: user});
});

router.post('/maxsus/1010', async (req, res)=>{
    let user = new User({
        username: req.body.username,
        userDate: req.body.userDate,
        ip: getIp(req).get_local_ip()     //////////////////////////// shu joyini o'zgartirasan
    });
    user = await user.save();
    res.redirect('/api/users/back')
});

router.post('/maxsus/1010/:id', async (req, res)=>{
    const user = await User.findByIdAndRemove(req.params.id);
    res.redirect('/api/users/back');
});

module.exports = router;