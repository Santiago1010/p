const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_event',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      format: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      categoryid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      courseid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      groupid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      repeatid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      modulename: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
      },
      instance: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      eventtype: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '',
      },
      timestart: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      timeduration: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      timesort: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      visible: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
      },
      uuid: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      sequence: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 1,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      subscriptionid: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      priority: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_event',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_even_cou_ix',
          using: 'BTREE',
          fields: [{ name: 'courseid' }],
        },
        {
          name: 'mdl_even_use_ix',
          using: 'BTREE',
          fields: [{ name: 'userid' }],
        },
        {
          name: 'mdl_even_tim_ix',
          using: 'BTREE',
          fields: [{ name: 'timestart' }],
        },
        {
          name: 'mdl_even_tim2_ix',
          using: 'BTREE',
          fields: [{ name: 'timeduration' }],
        },
        {
          name: 'mdl_even_uui_ix',
          using: 'BTREE',
          fields: [{ name: 'uuid' }],
        },
        {
          name: 'mdl_even_typtim_ix',
          using: 'BTREE',
          fields: [{ name: 'type' }, { name: 'timesort' }],
        },
        {
          name: 'mdl_even_grocoucatvisuse_ix',
          using: 'BTREE',
          fields: [
            { name: 'groupid' },
            { name: 'courseid' },
            { name: 'categoryid' },
            { name: 'visible' },
            { name: 'userid' },
          ],
        },
        {
          name: 'mdl_even_cat_ix',
          using: 'BTREE',
          fields: [{ name: 'categoryid' }],
        },
        {
          name: 'mdl_even_sub_ix',
          using: 'BTREE',
          fields: [{ name: 'subscriptionid' }],
        },
      ],
    }
  );
};
