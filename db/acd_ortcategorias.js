const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_ortcategorias', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    estado: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "ACTIVO"
    }
  }, {
    sequelize,
    tableName: 'acd_ortcategorias',
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
    ]
  });
};
