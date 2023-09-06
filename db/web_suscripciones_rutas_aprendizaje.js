const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_rutas_aprendizaje',
    {
      id_suscripcion_ruta_aprendizaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'null: ruta aprendizaje predeterminada, idUsuario -> rutaAutogestionada',
      },
      id_ruta_aprendizaje: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
      tableName: 'web_suscripciones_rutas_aprendizaje',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_ruta_aprendizaje' }],
        },
        {
          name: 'id_escuela_id_ruta_aprendizaje',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }, { name: 'id_ruta_aprendizaje' }],
        },
        {
          name: 'FK_web_escuelas_rutas_aprendizaje_web_rutas_aprendizaje',
          using: 'BTREE',
          fields: [{ name: 'id_ruta_aprendizaje' }],
        },
        {
          name: 'FK_web_suscripciones_rutas_aprendizaje_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
      ],
    }
  );
};
