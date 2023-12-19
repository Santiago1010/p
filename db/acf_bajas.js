const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_bajas',
    {
      id_baja: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
        type: DataTypes.ENUM('traslado', 'donacion', 'subasta', 'definitiva', 'destruccion'),
        allowNull: false,
        defaultValue: 'traslado',
        comment: 'Motivo de la baja',
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      justificacion: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      id_empleado_genera: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_autoriza: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha_autoriza: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      firma_autoriza: {
        type: DataTypes.STRING(200),
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
      tableName: 'acf_bajas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_baja' }],
        },
        {
          name: 'id_empleado_genera',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_genera' }],
        },
        {
          name: 'id_empleado_autoriza',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_autoriza' }],
        },
      ],
    }
  );
};
