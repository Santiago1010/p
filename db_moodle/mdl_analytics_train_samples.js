const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_train_samples', {
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
    analysableid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timesplitting: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    sampleids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_train_samples',
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
        name: "mdl_analtraisamp_modanatim_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
          { name: "analysableid" },
          { name: "timesplitting" },
        ]
      },
      {
        name: "mdl_analtraisamp_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
        ]
      },
    ]
  });
};
