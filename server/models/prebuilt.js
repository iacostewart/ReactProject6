module.exports = function(sequelize, DataTypes) {
    return sequelize.define('prebuilt', {
        admindeckname: DataTypes.STRING,
        admindificulitylevel: DataTypes.INTEGER,
        adminimg: DataTypes.STRING,
        adminquestion: DataTypes.STRING,
        adminanswer: DataTypes.STRING,
        childok: DataTypes.BOOLEAN,
        ratedr: DataTypes.BOOLEAN,
        owner: DataTypes.INTEGER

    },{
    });
};