const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_oauth2_access_token', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_oautaccetoke_iss_uix"
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_oauth2_access_token',
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
        name: "mdl_oautaccetoke_iss_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "issuerid" },
        ]
      },
    ]
  });
};
