const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
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
    },
    usercreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuername: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    issuerurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    issuercontact: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expiredate: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    expireperiod: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    messagesubject: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attachment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    notification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    nextcron: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imageauthorname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imageauthoremail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imageauthorurl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imagecaption: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge',
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
        name: "mdl_badg_typ_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "mdl_badg_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_badg_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_badg_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usercreated" },
        ]
      },
    ]
  });
};
