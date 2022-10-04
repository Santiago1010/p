const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_usuarios_notificaciones', {
    id_usuario_notificacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    id_suscripcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones',
        key: 'id_suscripcion'
      }
    },
    id_test: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_general',
        key: 'id'
      }
    },
    texto_notificacion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha_notificacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    visto_notificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'web_usuarios_notificaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_notificacion" },
        ]
      },
      {
        name: "FK_web_usuarios_notificaciones_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_web_usuarios_notificaciones_web_empresas",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
      {
        name: "FK_web_usuarios_notificaciones_test_resgeneral",
        using: "BTREE",
        fields: [
          { name: "id_test" },
        ]
      },
    ]
  });
};
