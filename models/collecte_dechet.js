'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collecte_dechet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Collecte_dechet.init({
    id_menage: DataTypes.STRING,
    id_collecte: DataTypes.INTEGER,
	date_dernier_collecte:DataTypes.DATE,
	intervale_de_collecte:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Collecte_dechet',
  });
  return Collecte_dechet;
};