const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_programas_formacion_modulos_capsulas', {
    id_modulo_capsula: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_modulo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_programas_formacion_modulos',
        key: 'id_programa_modulo'
      }
    },
    tipo_capsula: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    nombre_capsula: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recurso: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_programas_formacion_modulos_capsulas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_modulo_capsula" },
        ]
      },
      {
        name: "web_programas_formacion_modulos_capsulas_FK",
        using: "BTREE",
        fields: [
          { name: "id_modulo" },
        ]
      },
    ]
  });
};
