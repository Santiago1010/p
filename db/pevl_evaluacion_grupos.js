const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pevl_evaluacion_grupos',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_evaluacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pevl_evaluacion',
          key: 'id',
        },
      },
      id_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_grupos',
          key: 'id',
        },
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '1= activo, 0 = inactivo',
      },
    },
    {
      sequelize,
      tableName: 'pevl_evaluacion_grupos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'pevl_evaluacion_grupos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_evaluacion' }],
        },
        {
          name: 'pevl_evaluacion_grupos_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_grupo' }],
        },
      ],
    }
  );
};
