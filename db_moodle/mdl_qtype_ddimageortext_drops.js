const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_qtype_ddimageortext_drops', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    no: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    xleft: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ytop: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    choice: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_qtype_ddimageortext_drops',
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
        name: "mdl_qtypddimdrop_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
    ]
  });
};
