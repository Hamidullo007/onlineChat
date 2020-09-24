const express = require('express');
const router = express.Router();
const getIp = require('ipware');
//const _ = require('lodash');
const Message = require('../models/Message');
const User = require('../models/User');

router.get('/', async(req, res)=>{
    const message = await Message.find().sort('date');
    res.render('index1', {messages: message});
});

router.post('/request', async(req, res)=>{
    const message = await Message.find().sort('date');
    const user = await User.findOne({username: req.body.rName});
    if(user){
        return res.render('index', {messages: message, username: user.username});
    };
    res.render('error');
});

router.get('/api/messages/maxsus', async(req, res)=>{
    const message = await Message.find().sort('date');
    res.render('messages', {messages: message});
});

router.get('/api/messages', async(req, res)=>{
    const message = await Message.find().sort('date');
    res.send(message);
});

router.post('/api/messages', async(req, res)=>{
    let message = new Message({
        user: req.body.user,
        message: req.body.message,
        date: req.body.date,
        ip: getIp(req).get_local_ip()     //////////////////////////// shu joyini o'zgartirasan
    })
    if(req.body.message == ''){
        return res.render('index', {messages: message1, username: req.body.user});
    }
    message = await message.save();
    const message1 = await Message.find().sort('date');
    res.render('index', {messages: message1, username: req.body.user});
});

router.post('/api/messages/delete/1010/:id', async (req, res)=>{
    const message = await Message.findByIdAndRemove(req.params.id);
    res.redirect('/api/messages/maxsus')
});


module.exports = router;