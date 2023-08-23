const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_equipos',
    {
      id_equipo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_categoria',
          key: 'id_categoria',
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
      modelo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      serial: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      id_area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_areas',
          key: 'id_area',
        },
      },
      id_ubicacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'acf_ubicaciones',
          key: 'id_ubicacion',
        },
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      presentacion: {
        type: DataTypes.ENUM('unidad', 'paquete'),
        allowNull: false,
        defaultValue: 'unidad',
        comment: 'Presentación de activo segun su cantidad',
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      imagen: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      depreciacion: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      fecha_caducidad: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_garantia: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      modalidad_adquisicion: {
        type: DataTypes.ENUM('alquiler', 'compra', 'leasing', 'venta', 'duracion', 'compartido'),
        allowNull: false,
        defaultValue: 'compra',
      },
      fecha_adquisicion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      nombre_proveedor: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      observacion: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      estado: {
        type: DataTypes.ENUM('activo', 'prestamo', 'mantemiento', 'baja'),
        allowNull: false,
        defaultValue: 'activo',
        comment: 'Estado actual del activo',
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
      tableName: 'acf_equipos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_equipo' }],
        },
        {
          name: 'id_categoria',
          using: 'BTREE',
          fields: [{ name: 'id_categoria' }],
        },
        {
          name: 'id_area',
          using: 'BTREE',
          fields: [{ name: 'id_area' }],
        },
        {
          name: 'id_ubicacion',
          using: 'BTREE',
          fields: [{ name: 'id_ubicacion' }],
        },
        {
          name: 'id_empleado',
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }],
        },
      ],
    }
  );
};
