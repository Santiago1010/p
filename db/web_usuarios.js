const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios',
    {
      id_usuario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tipo_doc: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: '0',
      },
      documento: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '0',
      },
      nombre_completo_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      p_nombre_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      s_nombre_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      p_apellido_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      s_apellido_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: 'web_usuario_email_UN',
      },
      celular_usuario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      perfil_usuario: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      foto_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_imagenes',
          key: 'id_imagen',
        },
      },
      portada_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_imagenes',
          key: 'id_imagen',
        },
      },
      password_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      cambiar_password: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      aplico_test_cerebral: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '0  = No, 1 = Si',
      },
      nro_test_cerebral: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fecha_nacimiento: {
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
      sobre_mi: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      token_recuperacion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'web_usuario_email_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'email_usuario' }],
        },
        {
          name: 'FK_web_usuarios_web_imagenes',
          using: 'BTREE',
          fields: [{ name: 'foto_usuario' }],
        },
        {
          name: 'FK_web_usuarios_web_imagenes_2',
          using: 'BTREE',
          fields: [{ name: 'portada_usuario' }],
        },
      ],
    }
  );
};
