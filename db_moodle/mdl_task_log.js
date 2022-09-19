const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_task_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    component: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    classname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timestart: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: false
    },
    timeend: {
      type: DataTypes.DECIMAL(20,10),
      allowNull: false
    },
    dbreads: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dbwrites: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    result: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    output: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_task_log',
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
        name: "mdl_tasklog_cla_ix",
        using: "BTREE",
        fields: [
          { name: "classname" },
        ]
      },
      {
        name: "mdl_tasklog_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timestart" },
        ]
      },
    ]
  });
};
