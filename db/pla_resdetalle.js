const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_resdetalle',
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
          model: 'pla_resgeneral',
          key: 'id_resgeneral',
        },
      },
      id_indicador_opcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'pla_indicador_opciones',
          key: 'id_indicador_opcion',
        },
      },
      respuesta: {
        type: DataTypes.STRING(300),
        allowNull: true,
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
      tableName: 'pla_resdetalle',
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
          name: 'id_indicador_opcion',
          using: 'BTREE',
          fields: [{ name: 'id_indicador_opcion' }],
        },
      ],
    }
  );
};
