const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_entrevistas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    origen: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: "admisiones"
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'config_entrevistas',
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
        name: "origen",
        using: "BTREE",
        fields: [
          { name: "origen" },
        ]
      },
    ]
  });
};
