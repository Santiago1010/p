const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_aicc_session', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    scormid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    hacpsession: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    scoid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    scormmode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scormstatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    attempt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    lessonstatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sessiontime: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_aicc_session',
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
        name: "mdl_scoraiccsess_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scormid" },
        ]
      },
      {
        name: "mdl_scoraiccsess_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
