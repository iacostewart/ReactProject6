let Sequelize = require('sequelize');
let sequelize = new Sequelize('FlashCardApp', 'postgres', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function () {
        console.log('connected to  postgress db');
    },
    function (err) {
        console.log(err);
    }
);

let User = sequelize.import('./models/user');
module.exports = sequelize;
