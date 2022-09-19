const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_ciudades', {
    idCiudades: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    paises_Codigo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    codigo: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "codigo"
    },
    codigo_control: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'adm_ciudades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCiudades" },
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
        name: "FK_adm_ciudades_adm_paises",
        using: "BTREE",
        fields: [
          { name: "paises_Codigo" },
        ]
      },
      {
        name: "FK_adm_ciudades_adm_departamentos",
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
    ]
  });
};
