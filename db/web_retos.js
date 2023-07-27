const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_retos',
    {
      id_reto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      resumen: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.ENUM('cursos', 'iteracion'),
        allowNull: false,
        defaultValue: 'cursos',
      },
      logo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      beneficios: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Null para banco de retos',
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Null para banco de retos',
      },
      puntos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'web_retos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto' }],
        },
      ],
    }
  );
};
