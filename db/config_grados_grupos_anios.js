const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_grados_grupos_anios', {
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
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_grupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_grupos',
        key: 'id'
      }
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    id_gerente: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    id_coordinador: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    }
  }, {
    sequelize,
    tableName: 'config_grados_grupos_anios',
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
        name: "id_grado_id_grupo_id_anio",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_grado" },
          { name: "id_grupo" },
          { name: "id_anio" },
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
        name: "FK_config_grados_grupos_config_grupos",
        using: "BTREE",
        fields: [
          { name: "id_grupo" },
        ]
      },
      {
        name: "FK_config_grados_grupos_anios_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_config_grados_grupos_anios_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "id_gerente" },
        ]
      },
      {
        name: "FK_config_grados_grupos_anios_adm_empleados_2",
        using: "BTREE",
        fields: [
          { name: "id_coordinador" },
        ]
      },
    ]
  });
};
