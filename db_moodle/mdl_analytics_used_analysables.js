const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_used_analysables', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    analysableid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstanalysis: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timeanalysed: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_used_analysables',
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
        name: "mdl_analusedanal_modact_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
          { name: "action" },
        ]
      },
      {
        name: "mdl_analusedanal_ana_ix",
        using: "BTREE",
        fields: [
          { name: "analysableid" },
        ]
      },
      {
        name: "mdl_analusedanal_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
        ]
      },
    ]
  });
};
