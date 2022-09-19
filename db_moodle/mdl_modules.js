const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_modules', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    cron: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastcron: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    search: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_modules',
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
        name: "mdl_modu_nam_ix",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
