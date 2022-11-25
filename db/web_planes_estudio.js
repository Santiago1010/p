const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_planes_estudio', {
    id_plan_estudio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      allowNull: true,
=======
      allowNull: false,
>>>>>>> dev_m
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD
      allowNull: true,
=======
      allowNull: false,
>>>>>>> dev_m
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
      }
    },
    nombre: {
      type: DataTypes.STRING(255),
<<<<<<< HEAD
      allowNull: true
=======
      allowNull: false
>>>>>>> dev_m
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_planes_estudio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_plan_estudio" },
        ]
      },
      {
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_empresa",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
