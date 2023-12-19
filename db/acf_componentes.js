const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_componentes',
    {
      id_componente: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_equipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_equipos',
          key: 'id_equipo',
        },
      },
      nombre: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      marca: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      serial: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      justificacion_baja: {
        type: DataTypes.STRING(250),
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
      tableName: 'acf_componentes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_componente' }],
        },
        {
          name: 'id_equipo',
          using: 'BTREE',
          fields: [{ name: 'id_equipo' }],
        },
      ],
    }
  );
};
