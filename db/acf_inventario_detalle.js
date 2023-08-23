const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_inventario_detalle',
    {
      id_inventario_detalle: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_inventario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_inventario',
          key: 'id_inventario',
        },
      },
      id_equipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_equipos',
          key: 'id_equipo',
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'acf_inventario_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_inventario_detalle' }],
        },
        {
          name: 'detalles_inventario_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_inventario' }, { name: 'id_equipo' }],
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
