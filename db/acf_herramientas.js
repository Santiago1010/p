const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_herramientas',
    {
      id_herramienta: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_herramientas_categorias',
          key: 'id_categoria',
        },
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
      imagen: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      observacion: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      usuario: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      mfa: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      resp_mfa: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha_adquisicion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_renovacion: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      tipo_renovacion: {
        type: DataTypes.ENUM('anual', 'mensual', 'periodico'),
        allowNull: false,
        defaultValue: 'anual',
        comment: 'Tipo de renovacion herramientas',
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
      tableName: 'acf_herramientas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_herramienta' }],
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
          name: 'resp_mfa',
          using: 'BTREE',
          fields: [{ name: 'resp_mfa' }],
        },
      ],
    }
  );
};
