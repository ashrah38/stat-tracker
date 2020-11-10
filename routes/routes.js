const express = require('express');
const app = express();
const router = express.Router();
const unirest = require('unirest');
const eplStandings = require('../api-requests/epl-requests');

router.get('/', (req, res, next) => {
    console.log('dispatched');
    res.render('home.ejs');
})

router.get('/league/epl', (req, res, next) => {
    res.render('epl.ejs');
})

module.exports = router;