const express = require('express');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try{
        res.render('login', {
        title: 'CGV',
    });
    }catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;