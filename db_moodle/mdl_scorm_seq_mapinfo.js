const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_seq_mapinfo', {
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
    objectiveid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    targetobjectiveid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    readsatisfiedstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    readnormalizedmeasure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    writesatisfiedstatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    writenormalizedmeasure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_seq_mapinfo',
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
        name: "mdl_scorseqmapi_scoidobj_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scoid" },
          { name: "id" },
          { name: "objectiveid" },
        ]
      },
      {
        name: "mdl_scorseqmapi_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
      {
        name: "mdl_scorseqmapi_obj_ix",
        using: "BTREE",
        fields: [
          { name: "objectiveid" },
        ]
      },
    ]
  });
};
