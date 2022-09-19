const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_empresas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "codigo"
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    codventa: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    documento_contable: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_pagos_documentos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'config_empresas',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_config_empresas_tienda_pagos_documentos",
        using: "BTREE",
        fields: [
          { name: "documento_contable" },
        ]
      },
    ]
  });
};
