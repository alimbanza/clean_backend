'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menage.init({
    id_client: DataTypes.INTEGER,
    id_zone: DataTypes.INTEGER,
    coord_longitude:DataTypes.STRING,
    coord_latitude:DataTypes.STRING,
    id_adresse:DataTypes.INTEGER,
    //id_menage:DataTypes.INTEGER,
	date_dernier_collecte:DataTypes.DATE,
	intervale_de_collecte:DataTypes.INTEGER,
	type_client:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menage',
  });
  return Menage;
};