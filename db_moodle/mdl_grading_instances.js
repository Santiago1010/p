const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grading_instances', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    definitionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    raterid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rawgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    feedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_grading_instances',
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
        name: "mdl_gradinst_def_ix",
        using: "BTREE",
        fields: [
          { name: "definitionid" },
        ]
      },
      {
        name: "mdl_gradinst_rat_ix",
        using: "BTREE",
        fields: [
          { name: "raterid" },
        ]
      },
    ]
  });
};
