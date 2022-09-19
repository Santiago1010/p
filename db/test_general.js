const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_general', {
    codtest: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(150),
      allowNull: true
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
          { name: "codtest" },
        ]
      },
    ]
  });
};
