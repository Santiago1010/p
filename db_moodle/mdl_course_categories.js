const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_course_categories',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      idnumber: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      descriptionformat: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      parent: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      sortorder: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      coursecount: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      visibleold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      depth: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      path: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      theme: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'mdl_course_categories',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_courcate_par_ix',
          using: 'BTREE',
          fields: [{ name: 'parent' }],
        },
      ],
    }
  );
};
