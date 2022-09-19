const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_paises', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Codigo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      unique: "Codigo"
    },
    codigo_dian: {
      type: DataTypes.STRING(5),
      allowNull: true,
      unique: "codigo_dian"
    },
    Pais: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'adm_paises',
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
        name: "Codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Codigo" },
        ]
      },
      {
        name: "codigo_dian",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo_dian" },
        ]
      },
    ]
  });
};
