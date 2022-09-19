const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_escuelas_uniformes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_escuelas',
        key: 'codesc'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'acd_escuelas_uniformes',
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
        name: "FK_acd_escuelas_uniformes_acd_escuelas",
        using: "BTREE",
        fields: [
          { name: "codesc" },
        ]
      },
      {
        name: "FK_acd_escuelas_uniformes_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
