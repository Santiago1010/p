const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_comentarios_visto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_ventas_comentarios',
        key: 'id'
      }
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_comentarios_visto',
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
        name: "id_usuario_id_comentario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_comentario" },
        ]
      },
      {
        name: "FK_tienda_ventas_comentarios_visto_tienda_ventas_comentarios",
        using: "BTREE",
        fields: [
          { name: "id_comentario" },
        ]
      },
    ]
  });
};
