const express = require('express');
const router = express.Router();

console.log('in feedback router');

const pool = require('../modules/pool.js');

pool.on('connect', () => {
    console.log('postgresql connected');
});

pool.on('error', (error) => {
    console.log('Error connecting to db', error);
});


router.post('/', (req, res) => {
    console.log('in post feedback to db');
    const allFeedBack = req.body;

    const addFeedBackQuery = `INSERT INFO "feedback" ()`
})

module.exports = router;