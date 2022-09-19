const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_dataprivacy_request', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    commentsformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    requestedby: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dpo: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    dpocomment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dpocommentformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    creationmethod: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_dataprivacy_request',
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
        name: "mdl_tooldatarequ_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_tooldatarequ_req_ix",
        using: "BTREE",
        fields: [
          { name: "requestedby" },
        ]
      },
      {
        name: "mdl_tooldatarequ_dpo_ix",
        using: "BTREE",
        fields: [
          { name: "dpo" },
        ]
      },
      {
        name: "mdl_tooldatarequ_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
    ]
  });
};
