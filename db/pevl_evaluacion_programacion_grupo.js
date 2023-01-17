const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pevl_evaluacion_programacion_grupo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_programacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pevl_evaluacion_programacion',
        key: 'id'
      }
    },
    id_evaluacion_grupo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pevl_evaluacion_grupos',
        key: 'id'
      }
    },
    codpar: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    }
  }, {
    sequelize,
    tableName: 'pevl_evaluacion_programacion_grupo',
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
        name: "fk_pevl_evaluacion_programacion_grupo_programacion",
        using: "BTREE",
        fields: [
          { name: "id_programacion" },
        ]
      },
      {
        name: "fk_pevl_evaluacion_programacion_evaluacion_grupo",
        using: "BTREE",
        fields: [
          { name: "id_evaluacion_grupo" },
        ]
      },
      {
        name: "fk_pevl_evaluacion_programacion_grupo_gnr_programacion",
        using: "BTREE",
        fields: [
          { name: "codpar" },
        ]
      },
    ]
  });
};
