const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_plan', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    origtemplateid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    duedate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    reviewerid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_competency_plan',
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
        name: "mdl_compplan_usesta_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "status" },
        ]
      },
      {
        name: "mdl_compplan_tem_ix",
        using: "BTREE",
        fields: [
          { name: "templateid" },
        ]
      },
      {
        name: "mdl_compplan_stadue_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "duedate" },
        ]
      },
    ]
  });
};
