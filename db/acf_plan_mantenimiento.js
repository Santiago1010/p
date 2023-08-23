const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_plan_mantenimiento',
    {
      id_plan_mantenimiento: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_areas',
          key: 'id_area',
        },
      },
      nombre: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      objetivo: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
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
      tableName: 'acf_plan_mantenimiento',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_plan_mantenimiento' }],
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
