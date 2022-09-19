const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificaciones_enviadas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_notificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notificaciones',
        key: 'id'
      }
    },
    id_disparador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'notificaciones_disparadores',
        key: 'id'
      }
    },
    smsId: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "smsId"
    },
    emailId: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "emailId"
    },
    conceptosids: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    enviada: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'notificaciones_enviadas',
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
        name: "smsId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "smsId" },
        ]
      },
      {
        name: "emailId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "emailId" },
        ]
      },
      {
        name: "FK_notificaciones_enviadas_notificaciones",
        using: "BTREE",
        fields: [
          { name: "id_notificacion" },
        ]
      },
      {
        name: "FK_notificaciones_enviadas_notificaciones_disparadores",
        using: "BTREE",
        fields: [
          { name: "id_disparador" },
        ]
      },
    ]
  });
};
