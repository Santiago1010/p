const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_dependencias',
    {
      coddep: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nomdep: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      depsed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_sedes',
          key: 'codsed',
        },
      },
      id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'departamentos',
          key: 'id',
        },
      },
      ubidep: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      stddep: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      updusr: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      fchupd: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'adm_dependencias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'coddep' }],
        },
        {
          name: 'FK_dependencias_sedes',
          using: 'BTREE',
          fields: [{ name: 'depsed' }],
        },
        {
          name: 'FK_adm_dependencias_departamentos',
          using: 'BTREE',
          fields: [{ name: 'id_departamento' }],
        },
      ],
    }
  );
};
