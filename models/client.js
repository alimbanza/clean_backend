'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Client.init({
    nom: DataTypes.STRING,
    postnom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    telephone: DataTypes.STRING,
    sexe:DataTypes.STRING,
    //id_user:DataTypes.INTEGER,
    date_dernier_collecte:DataTypes.DATE,
	intervale_de_collecte:DataTypes.STRING,
	type_client:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};