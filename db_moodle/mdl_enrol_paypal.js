const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_paypal', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    business: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    receiver_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    receiver_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    instanceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    memo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tax: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    option_name1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    option_selection1_x: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    option_name2: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    option_selection2_x: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    payment_status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    pending_reason: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    reason_code: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    txn_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    parent_txn_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    payment_type: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    timeupdated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_paypal',
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
        name: "mdl_enropayp_bus_ix",
        using: "BTREE",
        fields: [
          { name: "business" },
        ]
      },
      {
        name: "mdl_enropayp_rec_ix",
        using: "BTREE",
        fields: [
          { name: "receiver_email" },
        ]
      },
      {
        name: "mdl_enropayp_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_enropayp_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_enropayp_ins_ix",
        using: "BTREE",
        fields: [
          { name: "instanceid" },
        ]
      },
    ]
  });
};
