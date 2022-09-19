const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_criteria', {
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
    criteriatype: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    method: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_criteria',
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
        name: "mdl_badgcrit_badcri_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "badgeid" },
          { name: "criteriatype" },
        ]
      },
      {
        name: "mdl_badgcrit_cri_ix",
        using: "BTREE",
        fields: [
          { name: "criteriatype" },
        ]
      },
      {
        name: "mdl_badgcrit_bad_ix",
        using: "BTREE",
        fields: [
          { name: "badgeid" },
        ]
      },
    ]
  });
};
