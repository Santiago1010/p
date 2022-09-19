const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_tipos_ident', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "codigo"
    },
    codigo_epayco: {
      type: DataTypes.STRING(5),
      allowNull: true,
      unique: "codigo_epayco"
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    abv: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_tipos_ident',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "codigo_epayco",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo_epayco" },
        ]
      },
    ]
  });
};
