const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_indicadores',
    {
      id_indicador: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_criterio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_criterios',
          key: 'id_criterio',
        },
      },
      descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM('unica', 'multiple', 'abierta'),
        allowNull: false,
        defaultValue: 'unica',
        comment: 'Tipo de indicador analogo a una pregunta',
      },
      depende: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pla_indicadores',
          key: 'id_indicador',
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
      tableName: 'pla_indicadores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_indicador' }],
        },
        {
          name: 'id_criterio',
          using: 'BTREE',
          fields: [{ name: 'id_criterio' }],
        },
        {
          name: 'depende',
          using: 'BTREE',
          fields: [{ name: 'depende' }],
        },
      ],
    }
  );
};
