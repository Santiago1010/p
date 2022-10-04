const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_notificaciones_categorias', {
    id_notificacion_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_notificacion_categoria: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_productos',
        key: 'id_producto'
      }
    }
  }, {
    sequelize,
    tableName: 'web_notificaciones_categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_notificacion_categoria" },
        ]
      },
      {
        name: "FK_web_notificaciones_categorias_ctb_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
