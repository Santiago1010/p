const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_user_info_data', {
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
    fieldid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dataformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_user_info_data',
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
        name: "mdl_userinfodata_usefie_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "fieldid" },
        ]
      },
    ]
  });
};
