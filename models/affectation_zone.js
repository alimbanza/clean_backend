'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Affectation_zone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Affectation_zone.init({
    id_user: DataTypes.INTEGER,
    id_zone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Affectation_zone',
  });
  return Affectation_zone;
};