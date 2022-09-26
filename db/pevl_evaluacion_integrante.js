const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pevl_evaluacion_integrante', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_evaluacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pevl_evaluacion_grupos',
        key: 'id'
      }
    },
    id_integrante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_grupos_integrantes',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_indicador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pelv_indicadores',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pevl_evaluacion_integrante',
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
        name: "pevl_evaluacion_integrante_FK",
        using: "BTREE",
        fields: [
          { name: "id_evaluacion" },
        ]
      },
      {
        name: "pevl_evaluacion_integrante_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_integrante" },
        ]
      },
      {
        name: "pevl_evaluacion_integrante_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_indicador" },
        ]
      },
    ]
  });
};
