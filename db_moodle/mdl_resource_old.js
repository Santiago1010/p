const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_resource_old', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    reference: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    alltext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    popup: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    options: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    oldid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_resoold_old_uix"
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    newmodule: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    newid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    migrated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_resource_old',
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
        name: "mdl_resoold_old_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oldid" },
        ]
      },
      {
        name: "mdl_resoold_cmi_ix",
        using: "BTREE",
        fields: [
          { name: "cmid" },
        ]
      },
    ]
  });
};
