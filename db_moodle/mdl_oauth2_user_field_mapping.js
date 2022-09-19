const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_oauth2_user_field_mapping', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    externalfield: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    internalfield: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_oauth2_user_field_mapping',
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
        name: "mdl_oautuserfielmapp_issin_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "issuerid" },
          { name: "internalfield" },
        ]
      },
      {
        name: "mdl_oautuserfielmapp_iss_ix",
        using: "BTREE",
        fields: [
          { name: "issuerid" },
        ]
      },
    ]
  });
};
