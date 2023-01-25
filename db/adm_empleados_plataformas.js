const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_empleados_plataformas',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codemp: {
        type: DataTypes.STRING(15),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      idPlataforma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_plataformas',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'adm_empleados_plataformas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'fk_empleado_plataformas_idPlataforma',
          using: 'BTREE',
          fields: [{ name: 'idPlataforma' }],
        },
        {
          name: 'fk_empleado_plataformas_idEmpleado',
          using: 'BTREE',
          fields: [{ name: 'codemp' }],
        },
      ],
    }
  );
};
