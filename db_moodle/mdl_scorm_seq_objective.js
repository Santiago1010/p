const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_seq_objective', {
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
    primaryobj: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    objectiveid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    satisfiedbymeasure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    minnormalizedmeasure: {
      type: DataTypes.FLOAT(11,4),
      allowNull: false,
      defaultValue: 0.0000
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_seq_objective',
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
        name: "mdl_scorseqobje_scoid_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scoid" },
          { name: "id" },
        ]
      },
      {
        name: "mdl_scorseqobje_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
    ]
  });
};
