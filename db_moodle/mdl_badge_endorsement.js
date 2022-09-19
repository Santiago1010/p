const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_endorsement', {
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
    issuername: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    issuerurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    issueremail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    claimid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    claimcomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateissued: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_endorsement',
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
        name: "mdl_badgendo_bad_ix",
        using: "BTREE",
        fields: [
          { name: "badgeid" },
        ]
      },
    ]
  });
};
