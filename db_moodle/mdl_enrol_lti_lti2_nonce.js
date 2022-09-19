const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_lti2_nonce', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    consumerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_lti2_nonce',
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
        name: "mdl_enroltilti2nonc_con_ix",
        using: "BTREE",
        fields: [
          { name: "consumerid" },
        ]
      },
    ]
  });
};
