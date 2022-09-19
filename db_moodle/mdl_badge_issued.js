const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_issued', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    badgeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    uniquehash: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dateissued: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dateexpire: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    issuernotified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_issued',
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
        name: "mdl_badgissu_baduse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "badgeid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_badgissu_bad_ix",
        using: "BTREE",
        fields: [
          { name: "badgeid" },
        ]
      },
      {
        name: "mdl_badgissu_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
