const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_consecutivos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    proceso: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_proceso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_procesos',
        key: 'id'
      }
    },
    id_resolucion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_resoluciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_consecutivos',
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
        name: "FK_tienda_consecutivos_tienda_resoluciones",
        using: "BTREE",
        fields: [
          { name: "id_resolucion" },
        ]
      },
      {
        name: "FK_tienda_consecutivos_tienda_procesos",
        using: "BTREE",
        fields: [
          { name: "id_proceso" },
        ]
      },
    ]
  });
};
