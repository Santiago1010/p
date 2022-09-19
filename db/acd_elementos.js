const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_elementos', {
    codelm: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nomelm: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ideelm: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    deselm: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tipelm: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    porct: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acd_elementos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codelm" },
        ]
      },
    ]
  });
};
