const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_fecha_publicacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    },
    grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    cerebro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha_minima: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_maxima: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_fecha_publicacion',
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
        name: "FK_test_fecha_publicacion_gnr_parametros",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
      {
        name: "FK_test_fecha_publicacion_acd_grados",
        using: "BTREE",
        fields: [
          { name: "grado" },
        ]
      },
    ]
  });
};
