const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_instructores',
    {
      id_instructor: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_completo_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      p_nombre_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      s_nombre_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      p_apellido_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      s_apellido_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      celular_instructor: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cargo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      biografia: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      f_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      genero: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      website: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      pais: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_paises',
          key: 'id',
        },
      },
      foto: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      facebook: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      twitter: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      instagram: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      linkedin: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'web_instructores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_instructor' }],
        },
        {
          name: 'FK_web_instructores_adm_paises',
          using: 'BTREE',
          fields: [{ name: 'pais' }],
        },
      ],
    }
  );
};
