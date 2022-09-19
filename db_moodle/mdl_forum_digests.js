const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_forum_digests', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    forum: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    maildigest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: -1
    }
  }, {
    sequelize,
    tableName: 'mdl_forum_digests',
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
        name: "mdl_forudige_forusemai_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "forum" },
          { name: "userid" },
          { name: "maildigest" },
        ]
      },
      {
        name: "mdl_forudige_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_forudige_for_ix",
        using: "BTREE",
        fields: [
          { name: "forum" },
        ]
      },
    ]
  });
};
