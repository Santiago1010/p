const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_ortcategoriasgrados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    grado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_ortcategorias',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'acd_ortcategoriasgrados',
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
        name: "FK__acd_grados",
        using: "BTREE",
        fields: [
          { name: "grado" },
        ]
      },
      {
        name: "FK__acd_ortcategorias",
        using: "BTREE",
        fields: [
          { name: "categoria" },
        ]
      },
    ]
  });
};
