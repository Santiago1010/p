const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cuenta_empresas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_pagos_cuentas',
        key: 'id'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_empresas',
        key: 'id'
      }
    },
    codigo_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "codigo_cuenta"
    }
  }, {
    sequelize,
    tableName: 'tienda_cuenta_empresas',
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
        name: "codigo_cuenta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo_cuenta" },
        ]
      },
      {
        name: "FK_tienda_pagos_sedes_tienda_pagos_cuentas",
        using: "BTREE",
        fields: [
          { name: "id_cuenta" },
        ]
      },
      {
        name: "FK_tienda_pagos_empresas_config_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
