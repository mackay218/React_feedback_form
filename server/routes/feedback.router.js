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
    console.log('in post feedback to db', req.body.feeling);
    const allFeedBack = req.body;

    //query to add feedback entry to database
    const addFeedBackQuery = `INSERT INTO "feedback" ("status_level", "understanding_level" ,
                                                     "support_level", "comments") VALUES 
                                                     ($1, $2, $3, $4);`;

    pool.query(addFeedBackQuery, [allFeedBack.feeling, allFeedBack.understanding, 
                                allFeedBack.support, allFeedBack.comments])
        .then((results) => {
            console.log('feedback added');
            res.sendStatus(200);
        })                      
        .catch((error) => {
            console.log('error adding feedback:', error);
            res.sendStatus(500);
        });                               
}); // end POST

//GET
router.get('/', (req, res) => {
    console.log('in get feedback from db', req.body);

    //query to get all feedback back from database
    const getFeedBackQuery = `SELECT * FROM "feedback"`;

    pool.query(getFeedBackQuery)
        .then((results) => {
            console.log('got feedback entrys:', results.rows);
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error getting feedback:', error);
            res.sendStatus(500);
        })
})

module.exports = router;