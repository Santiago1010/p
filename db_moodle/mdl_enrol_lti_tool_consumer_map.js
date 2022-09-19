const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_tool_consumer_map', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    toolid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    consumerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_tool_consumer_map',
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
        name: "mdl_enroltitoolconsmap_too_ix",
        using: "BTREE",
        fields: [
          { name: "toolid" },
        ]
      },
      {
        name: "mdl_enroltitoolconsmap_con_ix",
        using: "BTREE",
        fields: [
          { name: "consumerid" },
        ]
      },
    ]
  });
};
