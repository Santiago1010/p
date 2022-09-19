const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_models_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    evaluationmode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    target: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    indicators: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timesplitting: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    score: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dir: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_models_log',
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
        name: "mdl_analmodelog_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
        ]
      },
    ]
  });
};
