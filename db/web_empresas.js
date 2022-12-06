const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_empresas', {
    id_empresa: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nit_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    direccion_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    correo_empresa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_web_empresa_asesor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_empresas_asesores',
        key: 'id_web_empresa_asesor'
      }
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    logo: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_empresas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "FK_web_empresas_web_empresas_asesores",
        using: "BTREE",
        fields: [
          { name: "id_web_empresa_asesor" },
        ]
      },
    ]
  });
};
