const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_visitas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_acudiente: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    celular_acudiente: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    correo_acudiente: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ident_aspirante: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nombre_aspirante: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    sede: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_sedes',
        key: 'codsed'
      }
    }
  }, {
    sequelize,
    tableName: 'admision_visitas',
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
        name: "FK_admision_visitas_adm_sedes",
        using: "BTREE",
        fields: [
          { name: "sede" },
        ]
      },
    ]
  });
};
