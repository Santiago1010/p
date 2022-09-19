const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_feedback_item', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    feedback: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    template: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    presentation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    typ: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    hasvalue: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    position: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    dependitem: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    dependvalue: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    options: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_feedback_item',
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
        name: "mdl_feeditem_fee_ix",
        using: "BTREE",
        fields: [
          { name: "feedback" },
        ]
      },
      {
        name: "mdl_feeditem_tem_ix",
        using: "BTREE",
        fields: [
          { name: "template" },
        ]
      },
    ]
  });
};
