const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_clientes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nit_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nombre_cliente: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    correo_cliente: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono_cliente: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    direccion_cliente: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    sector_cliente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo_cliente: {
      type: DataTypes.ENUM('Makro','Micro'),
      allowNull: true
    },
    pais_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ciudad_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'crm_clientes',
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
    ]
  });
};
