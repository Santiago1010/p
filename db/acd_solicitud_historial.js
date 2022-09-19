const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_solicitud_historial', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_solicitud: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acd_solicitud_retiro',
        key: 'id'
      }
    },
    fecha_cita: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_cita: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('Agendada','Cancelada','Finalizada'),
      allowNull: true,
      defaultValue: "Agendada"
    },
    obervacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    add_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    fecha_add: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    tipo: {
      type: DataTypes.ENUM('Agenda','Entrega documentos'),
      allowNull: true,
      defaultValue: "Agenda"
    }
  }, {
    sequelize,
    tableName: 'acd_solicitud_historial',
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
      {
        name: "FK_acd_solicitud_historial_acd_solicitud_retiro",
        using: "BTREE",
        fields: [
          { name: "id_solicitud" },
        ]
      },
      {
        name: "FK_acd_solicitud_historial_usuario",
        using: "BTREE",
        fields: [
          { name: "add_user" },
        ]
      },
    ]
  });
};
