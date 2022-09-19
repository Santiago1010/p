const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_hvp_libraries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    machine_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    major_version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    minor_version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    patch_version: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    runnable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fullscreen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    embed_types: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    preloaded_js: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preloaded_css: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drop_library_css: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    semantics: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    restricted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    tutorial_url: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    has_icon: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    add_to: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    metadata_settings: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_hvp_libraries',
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
        name: "mdl_hvplibr_macmajminpatrun_ix",
        using: "BTREE",
        fields: [
          { name: "machine_name" },
          { name: "major_version" },
          { name: "minor_version" },
          { name: "patch_version" },
          { name: "runnable" },
        ]
      },
    ]
  });
};
