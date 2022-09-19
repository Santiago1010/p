const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    url_api: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "url_api"
    },
    url_front: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    icono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    depende: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'opciones',
        key: 'id'
      }
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'opciones',
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
        name: "url_api",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "url_api" },
        ]
      },
      {
        name: "FK_scloud_opciones_scloud_opciones",
        using: "BTREE",
        fields: [
          { name: "depende" },
        ]
      },
    ]
  });
};
