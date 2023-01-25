const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_empresas',
    {
      id_usuario_empresa: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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
      id_empresa_area: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas_areas',
          key: 'id_empresa_area',
        },
      },
      cargo_empresa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      puntos_actual: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_nivel_actual: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_niveles',
          key: 'id_nivel',
        },
      },
      ultima_fecha_ingreso: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fecha_racha: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      dias_racha: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tiempo_estudio: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'En segundos',
      },
      cursos_finalizados: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cursos_progreso: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      rol_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas_roles',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_empresas',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_empresa' }],
        },
        {
          name: 'id_usuario_id_empresa',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }, { name: 'id_empresa' }],
        },
        {
          name: 'FK_web_usuarios_empresas_web_empresas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
        {
          name: 'FK_web_usuarios_empresas_web_niveles',
          using: 'BTREE',
          fields: [{ name: 'id_nivel_actual' }],
        },
        {
          name: 'FK_web_usuarios_empresas_web_empresas_areas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa_area' }],
        },
        {
          name: 'web_usuarios_empresas_roles',
          using: 'BTREE',
          fields: [{ name: 'rol_empresa' }],
        },
      ],
    }
  );
};
