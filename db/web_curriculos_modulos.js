const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_curriculos_modulos', {
    id_modulo_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_curriculos',
        key: 'id_curriculo'
      }
    },
    nombre_modulo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    orden_modulo: {
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
    tableName: 'web_curriculos_modulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_modulo_curriculo" },
        ]
      },
      {
        name: "FK_web_curriculos_modulos_web_curriculos",
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
    ]
  });
};
