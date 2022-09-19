const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes_desistimiento', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "codigo"
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      }
    },
    id_plan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 no aprobado, 1 = aprobado"
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes_desistimiento',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_matricula_desistimiento_seguro_matricula_estudiantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_desistimiento_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_plan" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_desistimiento_tienda_ventas_2",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
    ]
  });
};
