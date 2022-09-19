const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_lti2_user_result', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    resourcelinkid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ltiuserkey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    ltiresultsourcedid: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      defaultValue: ""
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
    tableName: 'mdl_enrol_lti_lti2_user_result',
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
        name: "mdl_enroltilti2userresu_res_ix",
        using: "BTREE",
        fields: [
          { name: "resourcelinkid" },
        ]
      },
    ]
  });
};
