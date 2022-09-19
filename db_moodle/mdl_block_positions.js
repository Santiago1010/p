const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_block_positions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blockinstanceid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pagetype: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    subpage: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    visible: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    weight: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_block_positions',
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
        name: "mdl_blocposi_bloconpagsub_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "blockinstanceid" },
          { name: "contextid" },
          { name: "pagetype" },
          { name: "subpage" },
        ]
      },
      {
        name: "mdl_blocposi_blo_ix",
        using: "BTREE",
        fields: [
          { name: "blockinstanceid" },
        ]
      },
      {
        name: "mdl_blocposi_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
