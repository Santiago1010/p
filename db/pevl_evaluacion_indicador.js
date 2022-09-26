const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pevl_evaluacion_indicador', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_indicador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pelv_indicadores',
        key: 'id'
      }
    },
    id_evaluacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pevl_evaluacion',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pevl_evaluacion_indicador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "pevl_evaluacion_indicador_FK",
        using: "BTREE",
        fields: [
          { name: "id_indicador" },
        ]
      },
      {
        name: "pevl_evaluacion_indicador_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_evaluacion" },
        ]
      },
    ]
  });
};
