const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_modulos_lecciones_materiales',
    {
      id_material_leccion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_leccion_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_curriculos_modulos_lecciones',
          key: 'id_leccion_curriculo',
        },
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING(100),
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
    },
    {
      sequelize,
      tableName: 'web_curriculos_modulos_lecciones_materiales',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_material_leccion' }],
        },
        {
          name: 'web_curriculo_modulos_lecciones_materiales_FK',
          using: 'BTREE',
          fields: [{ name: 'id_leccion_curriculo' }],
        },
      ],
    }
  );
};
