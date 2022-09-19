const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_files', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contenthash: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    pathnamehash: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "",
      unique: "mdl_file_pat_uix"
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    filearea: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    filepath: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    filesize: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mimetype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    source: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    license: {
      type: DataTypes.STRING(255),
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
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    referencefileid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_files',
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
        name: "mdl_file_pat_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pathnamehash" },
        ]
      },
      {
        name: "mdl_file_comfilconite_ix",
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "filearea" },
          { name: "contextid" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_file_con_ix",
        using: "BTREE",
        fields: [
          { name: "contenthash" },
        ]
      },
      {
        name: "mdl_file_con2_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_file_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_file_ref_ix",
        using: "BTREE",
        fields: [
          { name: "referencefileid" },
        ]
      },
    ]
  });
};
