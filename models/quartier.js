'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quartier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quartier.init({
    nom: DataTypes.STRING,
    id_zone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quartier',
  });
  return Quartier;
};