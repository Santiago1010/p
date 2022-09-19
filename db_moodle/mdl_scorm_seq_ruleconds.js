const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_seq_ruleconds', {
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
    conditioncombination: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "all"
    },
    ruletype: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    action: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_seq_ruleconds',
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
        name: "mdl_scorseqrule_scoid_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scoid" },
          { name: "id" },
        ]
      },
      {
        name: "mdl_scorseqrule_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
    ]
  });
};
