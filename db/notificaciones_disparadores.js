const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificaciones_disparadores', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_notificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'notificaciones',
        key: 'id'
      }
    },
    fecha_hora_envio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notificado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'notificaciones_disparadores',
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
        name: "FK_notificaciones_disparadores_notificaciones",
        using: "BTREE",
        fields: [
          { name: "id_notificacion" },
        ]
      },
    ]
  });
};
