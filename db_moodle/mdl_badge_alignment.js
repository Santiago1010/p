const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_alignment', {
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
    targetname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    targeturl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    targetdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    targetframework: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    targetcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_alignment',
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
        name: "mdl_badgalig_bad_ix",
        using: "BTREE",
        fields: [
          { name: "badgeid" },
        ]
      },
    ]
  });
};
