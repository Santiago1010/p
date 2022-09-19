const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_seq_rolluprule', {
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
    childactivityset: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    minimumcount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    minimumpercent: {
      type: DataTypes.FLOAT(11,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    conditioncombination: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "all"
    },
    action: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_seq_rolluprule',
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
        name: "mdl_scorseqroll_scoid_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scoid" },
          { name: "id" },
        ]
      },
      {
        name: "mdl_scorseqroll_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
    ]
  });
};
