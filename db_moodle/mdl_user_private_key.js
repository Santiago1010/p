const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_user_private_key', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    script: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    instance: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    iprestriction: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    validuntil: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_user_private_key',
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
        name: "mdl_userprivkey_scrval_ix",
        using: "BTREE",
        fields: [
          { name: "script" },
          { name: "value" },
        ]
      },
      {
        name: "mdl_userprivkey_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
