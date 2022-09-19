const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_evidence', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usercompetencyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    action: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    actionuserid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    descidentifier: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    desccomponent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    desca: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    tableName: 'mdl_competency_evidence',
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
        name: "mdl_compevid_use_ix",
        using: "BTREE",
        fields: [
          { name: "usercompetencyid" },
        ]
      },
    ]
  });
};
