const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_forum_grades', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    forum: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemnumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_forum_grades',
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
        name: "mdl_forugrad_foriteuse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "forum" },
          { name: "itemnumber" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_forugrad_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_forugrad_for_ix",
        using: "BTREE",
        fields: [
          { name: "forum" },
        ]
      },
    ]
  });
};
