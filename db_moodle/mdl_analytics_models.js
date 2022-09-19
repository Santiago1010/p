const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_models', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    trained: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(1333),
      allowNull: true
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
    predictionsprocessor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_models',
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
        name: "mdl_analmode_enatra_ix",
        using: "BTREE",
        fields: [
          { name: "enabled" },
          { name: "trained" },
        ]
      },
    ]
  });
};
