const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_seq_rulecond', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    scoid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ruleconditionsid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    refrencedobjective: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    measurethreshold: {
      type: DataTypes.FLOAT(11,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    operator: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "noOp"
    },
    cond: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "always"
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_seq_rulecond',
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
        name: "mdl_scorseqrule_idscorul_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "scoid" },
          { name: "ruleconditionsid" },
        ]
      },
      {
        name: "mdl_scorseqrule_sco2_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
      {
        name: "mdl_scorseqrule_rul_ix",
        using: "BTREE",
        fields: [
          { name: "ruleconditionsid" },
        ]
      },
    ]
  });
};
