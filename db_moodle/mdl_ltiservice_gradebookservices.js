const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_ltiservice_gradebookservices',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      gradeitemid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      courseid: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      toolproxyid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      typeid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      baseurl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ltilinkid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      tag: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_ltiservice_gradebookservices',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_ltisgrad_lti_ix',
          using: 'BTREE',
          fields: [{ name: 'ltilinkid' }],
        },
        {
          name: 'mdl_ltisgrad_gracou_ix',
          using: 'BTREE',
          fields: [{ name: 'gradeitemid' }, { name: 'courseid' }],
        },
      ],
    }
  );
};
