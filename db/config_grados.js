const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_grados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "codigo"
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codsed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_sedes',
        key: 'codsed'
      }
    },
    visibleweb: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nivel: {
      type: DataTypes.ENUM('primaria','secundaria','preescolar','media'),
      allowNull: true
    },
    nivel_ingles_sugerido: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    asig_admission: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'config_grados',
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
        name: "FK_config_grados_adm_sedes",
        using: "BTREE",
        fields: [
          { name: "codsed" },
        ]
      },
    ]
  });
};
