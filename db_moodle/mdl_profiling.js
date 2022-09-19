const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_profiling', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    runid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_prof_run_uix"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    totalexecutiontime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    totalcputime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    totalcalls: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    totalmemory: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    runreference: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    runcomment: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_profiling',
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
        name: "mdl_prof_run_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "runid" },
        ]
      },
      {
        name: "mdl_prof_urlrun_ix",
        using: "BTREE",
        fields: [
          { name: "url" },
          { name: "runreference" },
        ]
      },
      {
        name: "mdl_prof_timrun_ix",
        using: "BTREE",
        fields: [
          { name: "timecreated" },
          { name: "runreference" },
        ]
      },
    ]
  });
};
