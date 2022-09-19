const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_related', {
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
    relatedbadgeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_related',
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
        name: "mdl_badgrela_badrel_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "badgeid" },
          { name: "relatedbadgeid" },
        ]
      },
      {
        name: "mdl_badgrela_bad_ix",
        using: "BTREE",
        fields: [
          { name: "badgeid" },
        ]
      },
      {
        name: "mdl_badgrela_rel_ix",
        using: "BTREE",
        fields: [
          { name: "relatedbadgeid" },
        ]
      },
    ]
  });
};
