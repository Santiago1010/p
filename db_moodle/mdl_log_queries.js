const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_log_queries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    qtype: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    sqltext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sqlparams: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    error: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    backtrace: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exectime: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    timelogged: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_log_queries',
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
