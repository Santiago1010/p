const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_proveedores_respons', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    coddep: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_dependencias',
        key: 'coddep'
      }
    },
    codemp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    firma: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recurrente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ctb_proveedores_respons',
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
        name: "FK__adm_dependencias",
        using: "BTREE",
        fields: [
          { name: "coddep" },
        ]
      },
      {
        name: "FK_ctb_proveedores_respons_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
    ]
  });
};
