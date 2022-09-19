const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificaciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "Cuando es email este campo se usara como el asunto"
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "Se usara cuando sea push o sms "
    },
    url: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    header: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Se usa para el email"
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Se usa para el email"
    },
    footer: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Se usa para el email"
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enviado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_usuarios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_enviados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    tipo: {
      type: DataTypes.ENUM('push','sms','email'),
      allowNull: true,
      defaultValue: "push"
    },
    intervalo: {
      type: DataTypes.ENUM('diario','semanal','quincenal','mensual','unica'),
      allowNull: true
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'notificaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
