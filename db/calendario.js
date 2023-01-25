const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'calendario',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'calendario_categorias',
          key: 'id',
        },
      },
      id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'departamentos',
          key: 'id',
        },
      },
      codesc: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      codsed: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_sedes',
          key: 'codsed',
        },
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        },
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'calendario',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_calendario_calendario_categorias',
          using: 'BTREE',
          fields: [{ name: 'id_categoria' }],
        },
        {
          name: 'FK_calend_departamentos',
          using: 'BTREE',
          fields: [{ name: 'id_departamento' }],
        },
        {
          name: 'FK_calendario_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'FK_calendario_acd_escuelas',
          using: 'BTREE',
          fields: [{ name: 'codesc' }],
        },
        {
          name: 'FK_calendario_adm_sedes',
          using: 'BTREE',
          fields: [{ name: 'codsed' }],
        },
      ],
    }
  );
};
