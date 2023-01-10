const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_programas_formacion_modulos', {
    id_programa_modulo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_programa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_programas_formacion',
        key: 'id_programa_formacion'
      }
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_programas_formacion_modulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_programa_modulo" },
        ]
      },
      {
        name: "web_programas_formacion_modulos_FK",
        using: "BTREE",
        fields: [
          { name: "id_programa" },
        ]
      },
    ]
  });
};
