const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5p_libraries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    machinename: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    majorversion: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    minorversion: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    patchversion: {
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
    embedtypes: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    preloadedjs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preloadedcss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    droplibrarycss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    semantics: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    coremajor: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    coreminor: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_h5p_libraries',
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
        name: "mdl_h5plibr_macmajminpatrun_ix",
        using: "BTREE",
        fields: [
          { name: "machinename" },
          { name: "majorversion" },
          { name: "minorversion" },
          { name: "patchversion" },
          { name: "runnable" },
        ]
      },
    ]
  });
};
