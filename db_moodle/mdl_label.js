const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_label',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      course: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      intro: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      introformat: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 0,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      name2: {
        type: DataTypes.STRING(150),
        allowNull: false,
        defaultValue: 'Etiqueta',
      },
    },
    {
      sequelize,
      tableName: 'mdl_label',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_labe_cou_ix',
          using: 'BTREE',
          fields: [{ name: 'course' }],
        },
      ],
    }
  );
};
