const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_instructores',
    {
      id_curso_instructor: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_cursos',
          key: 'id_curso',
        },
      },
      id_instructor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_instructores',
          key: 'id_instructor',
        },
      },
      mod_contrato: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Se deberian ligar solo modelos de tipo contrato',
        references: {
          model: 'adm_contratos_modelos',
          key: 'id',
        },
      },
      validado_en: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Fecha  de validación del contrato',
      },
      firma: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: 'Link a la firma del instructor',
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
      tableName: 'web_cursos_instructores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso_instructor' }],
        },
        {
          name: 'id_curso_id_instructor',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso' }, { name: 'id_instructor' }],
        },
        {
          name: 'FK_web_cursos_instructores_web_instructores',
          using: 'BTREE',
          fields: [{ name: 'id_instructor' }],
        },
        {
          name: 'web_cursos_instructores_mod_contrato_foreign_idx',
          using: 'BTREE',
          fields: [{ name: 'mod_contrato' }],
        },
      ],
    }
  );
};
