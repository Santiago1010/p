const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_feedback_value',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      course_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      item: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      completed: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      tmp_completed: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'mdl_feedback_value',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_feedvalu_comitecou_uix',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'completed' }, { name: 'item' }, { name: 'course_id' }],
        },
        {
          name: 'mdl_feedvalu_cou_ix',
          using: 'BTREE',
          fields: [{ name: 'course_id' }],
        },
        {
          name: 'mdl_feedvalu_ite_ix',
          using: 'BTREE',
          fields: [{ name: 'item' }],
        },
      ],
    }
  );
};
