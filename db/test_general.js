const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_general', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codtest: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "codtest"
    },
    tipo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    desde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('ACTIVO','INACTIVO'),
      allowNull: true,
      defaultValue: "ACTIVO"
    }
  }, {
    sequelize,
    tableName: 'test_general',
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
        name: "codtest",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codtest" },
        ]
      },
    ]
  });
};
