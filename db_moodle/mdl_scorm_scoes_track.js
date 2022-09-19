const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scorm_scoes_track', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    scormid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    scoid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    attempt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    element: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_scorm_scoes_track',
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
        name: "mdl_scorscoetrac_usescosco_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "scormid" },
          { name: "scoid" },
          { name: "attempt" },
          { name: "element" },
        ]
      },
      {
        name: "mdl_scorscoetrac_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_scorscoetrac_sco_ix",
        using: "BTREE",
        fields: [
          { name: "scormid" },
        ]
      },
      {
        name: "mdl_scorscoetrac_sco2_ix",
        using: "BTREE",
        fields: [
          { name: "scoid" },
        ]
      },
    ]
  });
};
