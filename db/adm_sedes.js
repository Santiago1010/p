const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_sedes',
    {
      codsed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nitsed: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nomsed: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      estsed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      depsed: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dirsed: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      codprm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'adm_sedes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codsed' }],
        },
      ],
    }
  );
};
