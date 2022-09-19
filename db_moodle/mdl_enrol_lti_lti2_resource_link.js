const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_lti2_resource_link', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    consumerid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ltiresourcelinkkey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    primaryresourcelinkid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    shareapproved: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    created: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_lti2_resource_link',
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
        name: "mdl_enroltilti2resolink_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_enroltilti2resolink_pri_ix",
        using: "BTREE",
        fields: [
          { name: "primaryresourcelinkid" },
        ]
      },
      {
        name: "mdl_enroltilti2resolink_co2_ix",
        using: "BTREE",
        fields: [
          { name: "consumerid" },
        ]
      },
    ]
  });
};
