'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zone_couverture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Zone_couverture.init({
    nom: DataTypes.STRING,
    coordonnees: DataTypes.STRING,
    etat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Zone_couverture',
  });
  return Zone_couverture;
};