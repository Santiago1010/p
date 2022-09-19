const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_permisos_opc', {
    codperm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codmenu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_menusconfig',
        key: 'codigo'
      }
    },
    codempl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    detalle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    general: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'test_permisos_opc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codperm" },
        ]
      },
      {
        name: "FK_test_permisos_opc_test_menusconfig",
        using: "BTREE",
        fields: [
          { name: "codmenu" },
        ]
      },
      {
        name: "FK_test_permisos_opc_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "codempl" },
        ]
      },
    ]
  });
};
