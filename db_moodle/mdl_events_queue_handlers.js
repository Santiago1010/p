const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_events_queue_handlers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    queuedeventid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    handlerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errormessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_events_queue_handlers',
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
        name: "mdl_evenqueuhand_que_ix",
        using: "BTREE",
        fields: [
          { name: "queuedeventid" },
        ]
      },
      {
        name: "mdl_evenqueuhand_han_ix",
        using: "BTREE",
        fields: [
          { name: "handlerid" },
        ]
      },
    ]
  });
};
