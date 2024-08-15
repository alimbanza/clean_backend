'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adresse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Adresse.init({
    id_commune: DataTypes.INTEGER,
    id_quartier: DataTypes.INTEGER,
    avenue: DataTypes.STRING,
    num_parcelle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adresse',
  });
  return Adresse;
};