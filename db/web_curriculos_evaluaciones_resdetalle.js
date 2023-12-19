const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_evaluaciones_resdetalle',
    {
      id_resdetalle: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_resgeneral: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_curriculos_evaluaciones_resgeneral',
          key: 'id_resgeneral',
        },
      },
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_preguntas',
          key: 'codpre',
        },
      },
      id_opcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'NULL preguntas abiertas',
        references: {
          model: 'test_opciones',
          key: 'id',
        },
      },
      respuesta: {
        type: DataTypes.STRING(500),
        allowNull: true,
        comment: 'NULL preguntas que no sean abiertas',
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
      tableName: 'web_curriculos_evaluaciones_resdetalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_resdetalle' }],
        },
        {
          name: 'id_resgeneral',
          using: 'BTREE',
          fields: [{ name: 'id_resgeneral' }],
        },
        {
          name: 'id_pregunta',
          using: 'BTREE',
          fields: [{ name: 'id_pregunta' }],
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
