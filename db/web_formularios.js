const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_formularios',
    {
      id_formulario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: 'Titulo personalizado del formulario',
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas',
          key: 'id_empresa',
        },
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      campos_ocultos: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: 'id del html de los campos que se quieren ocultar en el formulario',
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      header_registro_exitoso: {
        type: DataTypes.STRING(250),
        allowNull: true,
        comment: 'Imagen de encabezado personalizado del mensaje de registro exitoso (email y registro)',
      },
      header_confirmacion_cuenta: {
        type: DataTypes.STRING(250),
        allowNull: true,
        comment: 'Imagen de pie de pagina personalizado del mensaje de confirmacion de cuenta',
      },
      header_error: {
        type: DataTypes.STRING(250),
        allowNull: true,
        comment: 'Imagen de pie de pagina personalizado del mensaje de error',
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
      tableName: 'web_formularios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario' }],
        },
        {
          name: 'id_empresa',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
