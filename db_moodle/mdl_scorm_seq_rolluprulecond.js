const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_seq_rolluprulecond', {
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
    rollupruleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    operator: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "noOp"
    },
    cond: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_seq_rolluprulecond',
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
        name: "mdl_scorseqroll_scorolid_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scoid" },
          { name: "rollupruleid" },
          { name: "id" },
        ]
      },
      {
        name: "mdl_scorseqroll_sco2_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
      {
        name: "mdl_scorseqroll_rol_ix",
        using: "BTREE",
        fields: [
          { name: "rollupruleid" },
        ]
      },
    ]
  });
};
