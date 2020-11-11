const express = require('express');
const app = express();
const router = express.Router();
const unirest = require('unirest');

router.get('/', (req, res, next) => {
    res.render('home.ejs');
});

router.get('/league/epl', (req, res, next) => {
    res.render('epl.ejs');
});

router.get('/league/laliga', (req, res, next) => {
    res.render('laliga.ejs');
});

router.get('/league/seriea', (req, res, next) => {
    res.render('serie.ejs');
});

router.get('/league/ligue1', (req, res, next) => {
    res.render('ligue.ejs');
});

router.get('/league/bundesliga', (req, res, next) => {
    res.render('bundesliga.ejs');
});

router.get('/league/eredevisie', (req, res, next) => {
    res.render('eredevisie.ejs');
});



module.exports = router;