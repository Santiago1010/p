const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_scoes', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scorm: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    manifest: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    organization: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    parent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    launch: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scormtype: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_scoes',
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
        name: "mdl_scorscoe_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scorm" },
        ]
      },
    ]
  });
};
