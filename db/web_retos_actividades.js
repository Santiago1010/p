const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_retos_actividades',
    {
      id_reto_actividad: {
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
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      link: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      ubicacion: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_retos_actividades',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto_actividad' }],
        },
        {
          name: 'id_reto',
          using: 'BTREE',
          fields: [{ name: 'id_reto' }],
        },
      ],
    }
  );
};
