const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lti_types', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "basiclti Activity"
    },
    baseurl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tooldomain: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    coursevisible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ltiversion: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    clientid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "mdl_ltitype_cli_uix"
    },
    toolproxyid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    enabledcapability: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parameter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secureicon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdby: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_lti_types',
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
        name: "mdl_ltitype_cli_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "clientid" },
        ]
      },
      {
        name: "mdl_ltitype_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_ltitype_too_ix",
        using: "BTREE",
        fields: [
          { name: "tooldomain" },
        ]
      },
    ]
  });
};
