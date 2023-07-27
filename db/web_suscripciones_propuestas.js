const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_propuestas',
    {
      id_suscripcion_propuesta: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas',
          key: 'id_empresa',
        },
      },
      total_licencias: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      rol_dinamico: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: 'Configurar si se dispara el modal para elegir el rol dinamicamente en Virtual',
      },
      fecha_test: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      tipo_cliente: {
        type: DataTypes.ENUM('micro', 'macro'),
        allowNull: false,
        defaultValue: 'micro',
      },
      valor_venta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      nombre_completo_asesor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      celular_asesor: {
        type: DataTypes.STRING(20),
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
      deleted_for: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_suscripciones_propuestas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_propuesta' }],
        },
        {
          name: 'FK_web_suscripciones_licencias_web_empresas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
