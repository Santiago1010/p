const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_progreso_grupo',
    {
      id_progreso_grupo_curriculo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_curriculos',
          key: 'id_curriculo',
        },
      },
      id_leccion_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_curriculos_modulos_lecciones',
          key: 'id_leccion_curriculo',
        },
      },
      id_suscripcion_curriculo_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: '0 = Pendiente, 1 = Progreso, 2 = Terminado',
        references: {
          model: 'web_suscripciones_curriculos_grupos',
          key: 'id_suscripcion_curriculo_grupo',
        },
      },
      estado: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_curriculos_progreso_grupo',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_progreso_grupo_curriculo' }],
        },
        {
          name: 'web_curriculos_progreso_grupo_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_leccion_curriculo' }, { name: 'id_suscripcion_curriculo_grupo' }],
        },
        {
          name: 'web_curriculos_progreso_grupo_FK',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_grupo' }],
        },
        {
          name: 'web_curriculos_progreso_grupo_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_curriculo' }],
        },
      ],
    }
  );
};
