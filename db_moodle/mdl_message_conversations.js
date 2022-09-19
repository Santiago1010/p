const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_conversations', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    convhash: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itemtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_message_conversations',
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
        name: "mdl_messconv_typ_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
      {
        name: "mdl_messconv_con_ix",
        using: "BTREE",
        fields: [
          { name: "convhash" },
        ]
      },
      {
        name: "mdl_messconv_comiteitecon_ix",
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "itemtype" },
          { name: "itemid" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_messconv_con2_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
