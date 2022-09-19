const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cupones_estudiantes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cupon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupones',
        key: 'id'
      }
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    limite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    usado: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_cupones_estudiantes',
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
        name: "id_cupon_id_estudiante",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cupon" },
          { name: "id_estudiante" },
        ]
      },
      {
        name: "FK_tienda_cupones_estudiantes_matricula_estudiantes",
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
        ]
      },
    ]
  });
};
