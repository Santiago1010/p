const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_eventos',
    {
      id_eventos: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_evento_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_eventos_categorias',
          key: 'id_evento_categoria',
        },
      },
      id_componente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_componentes',
          key: 'id_componente',
        },
      },
      nombre_evento: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      conferencista: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      medio: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      fecha_asistencia: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      asistencia: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '0=Pendiente,1=Progreso,2=Finalizado',
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
      tableName: 'web_eventos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_eventos' }],
        },
        {
          name: 'FK_web_eventos_web_eventos_categorias',
          using: 'BTREE',
          fields: [{ name: 'id_evento_categoria' }],
        },
        {
          name: 'FK_web_eventos_web_componentes',
          using: 'BTREE',
          fields: [{ name: 'id_componente' }],
        },
      ],
    }
  );
};
