const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_mnet_session', {
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
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    token: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_mnetsess_tok_uix"
    },
    mnethostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    useragent: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    confirm_timeout: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    session_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_mnet_session',
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
        name: "mdl_mnetsess_tok_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
};
