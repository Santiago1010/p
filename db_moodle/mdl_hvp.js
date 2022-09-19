const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_hvp', {
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
    intro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    json_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    embed_type: {
      type: DataTypes.STRING(127),
      allowNull: false,
      defaultValue: ""
    },
    disable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    main_library_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    content_type: {
      type: DataTypes.STRING(127),
      allowNull: true
    },
    authors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    year_from: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    year_to: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    license: {
      type: DataTypes.STRING(63),
      allowNull: true
    },
    license_version: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    changes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    license_extras: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    author_comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_language: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    filtered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
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
    completionpass: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    shared: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    synced: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hub_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    a11y_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_hvp',
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
    ]
  });
};
