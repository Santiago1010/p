const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_novedad_cambios',
    {
      ide: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codnovd: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_novedades_nom',
          key: 'codigo',
        },
      },
      observacion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      addusr: {
        type: DataTypes.STRING(15),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'ctb_novedad_cambios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'ide' }],
        },
        {
          name: 'ctb_novedad_cambios_FK',
          using: 'BTREE',
          fields: [{ name: 'codnovd' }],
        },
        {
          name: 'ctb_novedad_cambios_FK_1',
          using: 'BTREE',
          fields: [{ name: 'addusr' }],
        },
      ],
    }
  );
};
