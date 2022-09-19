const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_notifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    useridfrom: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    useridto: {
      type: DataTypes.BIGINT,
      allowNull: false
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
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eventtype: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contexturl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contexturlname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timeread: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    customdata: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_notifications',
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
        name: "mdl_noti_use_ix",
        using: "BTREE",
        fields: [
          { name: "useridfrom" },
        ]
      },
      {
        name: "mdl_noti_use2_ix",
        using: "BTREE",
        fields: [
          { name: "useridto" },
        ]
      },
    ]
  });
};
