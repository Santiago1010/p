const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_preguntas', {
    codpre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    despre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    compente: {
      type: DataTypes.STRING(350),
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: false,
      defaultValue: "A"
    },
    id_indicador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'evl_preguntas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codpre" },
        ]
      },
    ]
  });
};
