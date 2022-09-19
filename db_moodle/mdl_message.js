const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    useridfrom: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    useridto: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fullmessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fullmessageformat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    fullmessagehtml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    smallmessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notification: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    contexturl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contexturlname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeuserfromdeleted: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeusertodeleted: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eventtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customdata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_message',
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
        name: "mdl_mess_useusetimtim_ix",
        using: "BTREE",
        fields: [
          { name: "useridfrom" },
          { name: "useridto" },
          { name: "timeuserfromdeleted" },
          { name: "timeusertodeleted" },
        ]
      },
      {
        name: "mdl_mess_usetimnot_ix",
        using: "BTREE",
        fields: [
          { name: "useridfrom" },
          { name: "timeuserfromdeleted" },
          { name: "notification" },
        ]
      },
      {
        name: "mdl_mess_usetimnot2_ix",
        using: "BTREE",
        fields: [
          { name: "useridto" },
          { name: "timeusertodeleted" },
          { name: "notification" },
        ]
      },
    ]
  });
};
