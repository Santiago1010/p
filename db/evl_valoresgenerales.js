const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_valoresgenerales', {
    codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    valor: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    codverf: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'evl_valoresgenerales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
