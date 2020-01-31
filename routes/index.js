const express = require('express');
const {projects} = require('../data.json');

const router = express.Router();

router.get('/', (req, res) => {
    res.locals.projects = projects;
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
