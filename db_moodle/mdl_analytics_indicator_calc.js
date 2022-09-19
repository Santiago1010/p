const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_indicator_calc', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    starttime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    endtime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sampleorigin: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sampleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    indicator: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_indicator_calc',
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
        name: "mdl_analindicalc_staendcon_ix",
        using: "BTREE",
        fields: [
          { name: "starttime" },
          { name: "endtime" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_analindicalc_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
