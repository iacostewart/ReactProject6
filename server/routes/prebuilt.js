let router = require('express').Router();
let sequelize = require('../db');
let Log = sequelize.import('../models/log');
let User = sequelize.import('../models/user');
let Definition = sequelize.import('../models/definition');
let Prebuilt = sequelize.import('../models/prebuilt');
router.post('/', function(req, res) {
    let deckname = req.body.log.deckname;
    let adult = req.body.log.adult;
    let answer = req.body.log.answer;
    let child = req.body.log.child;
    let cardnumber = req.body.log.cardnumber;
    let dificulitylevel = req.body.log.dificulitylevel;
    let img = req.body.log.img;
    let user = req.user;

Prebuilt
    
     .create({
         deckname: deckname,
         adult : adult,
         answer : answer,
         child : child,
         cardnumber : cardnumber,
         dificulitylevel : dificulitylevel,
         img : img,
         owner: user.id
     })
     .then(
        function createSuccess(prebuilt) {
            res.json(prebuilt);
        },
        function createError(err) {
            res.send(500, err.message);
        }
     );
});

router.get('/', function(req,res) {
    let userid = req.user.id;
    Prebuilt
        .findAll({ 
            where: { owner: userid }
        })
        .then( 
            function findAllSuccess(data) {
                 // console.log(data);
                res.json(data);
            },
            function findAllSuccess(err) {
                res.send(500, err.message);
            }
        );
});

module.exports = router;