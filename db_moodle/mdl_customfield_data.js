const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_customfield_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fieldid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    instanceid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    intvalue: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    decvalue: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    shortcharvalue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    charvalue: {
      type: DataTypes.STRING(1333),
      allowNull: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    valueformat: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_customfield_data',
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
        name: "mdl_custdata_insfie_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "instanceid" },
          { name: "fieldid" },
        ]
      },
      {
        name: "mdl_custdata_fieint_ix",
        using: "BTREE",
        fields: [
          { name: "fieldid" },
          { name: "intvalue" },
        ]
      },
      {
        name: "mdl_custdata_fiesho_ix",
        using: "BTREE",
        fields: [
          { name: "fieldid" },
          { name: "shortcharvalue" },
        ]
      },
      {
        name: "mdl_custdata_fiedec_ix",
        using: "BTREE",
        fields: [
          { name: "fieldid" },
          { name: "decvalue" },
        ]
      },
      {
        name: "mdl_custdata_fie_ix",
        using: "BTREE",
        fields: [
          { name: "fieldid" },
        ]
      },
      {
        name: "mdl_custdata_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
