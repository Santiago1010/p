const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    celular: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pass: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Contraseña para entrar al sistema de administracion eds"
    },
    codemp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios_perfil',
        key: 'id'
      }
    },
    repro_cita_admision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'usuarios',
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
        name: "FK_usuarios_usuarios_perfil",
        using: "BTREE",
        fields: [
          { name: "id_perfil" },
        ]
      },
      {
        name: "FK_usuarios_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
    ]
  });
};
