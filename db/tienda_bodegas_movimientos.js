const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_bodegas_movimientos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_consecutivos',
        key: 'id'
      }
    },
    consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prefijo: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    items: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tienda_bodegas_movimientos',
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
        name: "FK_tienda_bodegas_movimientos_tienda_consecutivos",
        using: "BTREE",
        fields: [
          { name: "id_consecutivo" },
        ]
      },
      {
        name: "FK_tienda_bodegas_movimientos_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
