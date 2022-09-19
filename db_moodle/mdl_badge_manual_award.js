const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_manual_award', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    badgeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    recipientid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerrole: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datemet: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_manual_award',
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
        name: "mdl_badgmanuawar_bad_ix",
        using: "BTREE",
        fields: [
          { name: "badgeid" },
        ]
      },
      {
        name: "mdl_badgmanuawar_rec_ix",
        using: "BTREE",
        fields: [
          { name: "recipientid" },
        ]
      },
      {
        name: "mdl_badgmanuawar_iss_ix",
        using: "BTREE",
        fields: [
          { name: "issuerid" },
        ]
      },
      {
        name: "mdl_badgmanuawar_iss2_ix",
        using: "BTREE",
        fields: [
          { name: "issuerrole" },
        ]
      },
    ]
  });
};
