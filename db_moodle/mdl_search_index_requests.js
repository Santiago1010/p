const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_search_index_requests', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    searcharea: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timerequested: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    partialarea: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    partialtime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    indexpriority: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_search_index_requests',
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
        name: "mdl_searinderequ_indtim_ix",
        using: "BTREE",
        fields: [
          { name: "indexpriority" },
          { name: "timerequested" },
        ]
      },
      {
        name: "mdl_searinderequ_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
