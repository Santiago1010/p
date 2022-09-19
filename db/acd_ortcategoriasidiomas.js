const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_ortcategoriasidiomas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idioma: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cupos: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'acd_ortcategoriasidiomas',
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
        name: "FK_acd_ortcategoriasidiomas_acd_ortcategorias",
        using: "BTREE",
        fields: [
          { name: "categoria" },
        ]
      },
    ]
  });
};
