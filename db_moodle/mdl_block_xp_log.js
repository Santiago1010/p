const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_block_xp_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    eventname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    xp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_block_xp_log',
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
        name: "mdl_blocxplog_couuse_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_blocxplog_tim_ix",
        using: "BTREE",
        fields: [
          { name: "time" },
        ]
      },
    ]
  });
};
