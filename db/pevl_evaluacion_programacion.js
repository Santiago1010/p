const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pevl_evaluacion_programacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_max: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    tableName: 'pevl_evaluacion_programacion',
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
        name: "fk_pevl_evaluacion_programacion_gnr_programacion",
        using: "BTREE",
        fields: [
          { name: "codpar" },
        ]
      },
    ]
  });
};
