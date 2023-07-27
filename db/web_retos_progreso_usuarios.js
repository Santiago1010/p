const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_retos_progreso_usuarios',
    {
      id_reto_progreso: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_reto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_retos',
          key: 'id_reto',
        },
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
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
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      estado: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '0: Pendiente, 1: Progreso, 2: finalizado',
      },
    },
    {
      sequelize,
      tableName: 'web_retos_progreso_usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto_progreso' }],
        },
        {
          name: 'id_reto',
          using: 'BTREE',
          fields: [{ name: 'id_reto' }],
        },
        {
          name: 'id_usuario',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
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
