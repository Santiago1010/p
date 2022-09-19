const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_message_popup', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    messageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isread: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_message_popup',
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
        name: "mdl_messpopu_mesisr_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "messageid" },
          { name: "isread" },
        ]
      },
      {
        name: "mdl_messpopu_isr_ix",
        using: "BTREE",
        fields: [
          { name: "isread" },
        ]
      },
    ]
  });
};
