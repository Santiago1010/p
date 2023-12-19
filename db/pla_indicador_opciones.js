const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_indicador_opciones',
    {
      id_indicador_opcion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_indicador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_indicadores',
          key: 'id_indicador',
        },
      },
      id_opcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_opciones',
          key: 'id_opcion',
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
      tableName: 'pla_indicador_opciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_indicador_opcion' }],
        },
        {
          name: 'pla_indicador_opciones_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_indicador' }, { name: 'id_opcion' }],
        },
        {
          name: 'id_opcion',
          using: 'BTREE',
          fields: [{ name: 'id_opcion' }],
        },
      ],
    }
  );
};
