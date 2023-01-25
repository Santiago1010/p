const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_forum_posts',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      discussion: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      parent: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      userid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      created: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      modified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      mailed: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      subject: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      messageformat: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      messagetrust: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      attachment: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      totalscore: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      mailnow: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      privatereplyto: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      wordcount: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      charcount: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_forum_posts',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_forupost_use_ix',
          using: 'BTREE',
          fields: [{ name: 'userid' }],
        },
        {
          name: 'mdl_forupost_cre_ix',
          using: 'BTREE',
          fields: [{ name: 'created' }],
        },
        {
          name: 'mdl_forupost_mai_ix',
          using: 'BTREE',
          fields: [{ name: 'mailed' }],
        },
        {
          name: 'mdl_forupost_dis_ix',
          using: 'BTREE',
          fields: [{ name: 'discussion' }],
        },
        {
          name: 'mdl_forupost_par_ix',
          using: 'BTREE',
          fields: [{ name: 'parent' }],
        },
      ],
    }
  );
};
