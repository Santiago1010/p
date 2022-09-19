const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_portfolio_mahara_queue', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    transferid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_portfolio_mahara_queue',
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
        name: "mdl_portmahaqueu_tok_ix",
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "mdl_portmahaqueu_tra_ix",
        using: "BTREE",
        fields: [
          { name: "transferid" },
        ]
      },
    ]
  });
};
