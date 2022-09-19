const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_qtype_ddmarker_drags', {
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
    label: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    infinite: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    noofdrags: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_qtype_ddmarker_drags',
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
        name: "mdl_qtypddmadrag_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
    ]
  });
};
