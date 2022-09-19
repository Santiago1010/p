const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cupones_excel', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes',
        key: 'id'
      }
    },
    codigo_descuento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupones',
        key: 'id'
      }
    },
    padre: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    estudiante: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    grado: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descuento: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tienda_cupones_excel',
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
        name: "FK_tienda_cupones_excel_matricula_estudiantes",
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
        ]
      },
      {
        name: "FK_tienda_cupones_excel_tienda_cupones",
        using: "BTREE",
        fields: [
          { name: "codigo_descuento" },
        ]
      },
    ]
  });
};
