const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_val_actividad', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    },
    codactv: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'test_ejer_actividad',
        key: 'cod_ejercicio'
      }
    },
    coduser: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    respcalf: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descalf: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_val_actividad',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codevl" },
          { name: "codactv" },
          { name: "coduser" },
        ]
      },
      {
        name: "FK_test_val_actividad_test_ejer_actividad",
        using: "BTREE",
        fields: [
          { name: "codactv" },
        ]
      },
    ]
  });
};
