// build a model in sqllize
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('log', {
		decknametype: DataTypes.STRING,
		question: DataTypes.STRING,
		answer: DataTypes.STRING,
		owner: DataTypes.INTEGER
		
	},{
	});
};

            