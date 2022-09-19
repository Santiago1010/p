const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gnr_parametros_usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codemp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    perfil: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'gnr_parametros_perfiles',
        key: 'descipcion'
      }
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'acd_elementos',
        key: 'codelm'
      }
    }
  }, {
    sequelize,
    tableName: 'gnr_parametros_usuarios',
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
        name: "gnr_parametros_usuarios_FK",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
      {
        name: "gnr_parametros_usuarios_FK_1",
        using: "BTREE",
        fields: [
          { name: "perfil" },
        ]
      },
      {
        name: "FK_gnr_parametros_usuarios_acd_elementos",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
    ]
  });
};
