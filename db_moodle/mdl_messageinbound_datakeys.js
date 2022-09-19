const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_messageinbound_datakeys', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    handler: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datavalue: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datakey: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_messageinbound_datakeys',
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
        name: "mdl_messdata_handat_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "handler" },
          { name: "datavalue" },
        ]
      },
      {
        name: "mdl_messdata_han_ix",
        using: "BTREE",
        fields: [
          { name: "handler" },
        ]
      },
    ]
  });
};
