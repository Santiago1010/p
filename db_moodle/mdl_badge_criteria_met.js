const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_criteria_met', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    issuedid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    critid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datemet: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_criteria_met',
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
        name: "mdl_badgcritmet_cri_ix",
        using: "BTREE",
        fields: [
          { name: "critid" },
        ]
      },
      {
        name: "mdl_badgcritmet_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_badgcritmet_iss_ix",
        using: "BTREE",
        fields: [
          { name: "issuedid" },
        ]
      },
    ]
  });
};
