const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_predict_samples', {
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
    rangeindex: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sampleids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_predict_samples',
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
        name: "mdl_analpredsamp_modanatimr_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
          { name: "analysableid" },
          { name: "timesplitting" },
          { name: "rangeindex" },
        ]
      },
      {
        name: "mdl_analpredsamp_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
        ]
      },
    ]
  });
};
