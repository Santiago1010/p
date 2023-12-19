const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_formularios_areas',
    {
      id_formulario_area: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_formulario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_formularios',
          key: 'id_formulario',
        },
      },
      id_area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas_areas',
          key: 'id_empresa_area',
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_formularios_areas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario_area' }],
        },
        {
          name: 'formularios_areas_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario' }, { name: 'id_area' }],
        },
        {
          name: 'id_area',
          using: 'BTREE',
          fields: [{ name: 'id_area' }],
        },
      ],
    }
  );
};
