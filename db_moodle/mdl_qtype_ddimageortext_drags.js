const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_qtype_ddimageortext_drags', {
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
    draggroup: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    infinite: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_qtype_ddimageortext_drags',
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
        name: "mdl_qtypddimdrag_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
    ]
  });
};
