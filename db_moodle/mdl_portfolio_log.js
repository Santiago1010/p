const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_portfolio_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    portfolio: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    caller_class: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    caller_file: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    caller_component: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    caller_sha1: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    tempdataid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    returnurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    continueurl: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_portfolio_log',
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
        name: "mdl_portlog_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_portlog_por_ix",
        using: "BTREE",
        fields: [
          { name: "portfolio" },
        ]
      },
    ]
  });
};
