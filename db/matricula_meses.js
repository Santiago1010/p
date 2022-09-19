const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_meses', {
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
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    descripcion: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'matricula_meses',
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
        name: "FK_tienda_meses_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
