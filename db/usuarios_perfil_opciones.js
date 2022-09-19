const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios_perfil_opciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'opciones',
        key: 'id'
      }
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios_perfil',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios_perfil_opciones',
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
        name: "id_opcion_id_perfil",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
          { name: "id_perfil" },
        ]
      },
      {
        name: "FK_scloud_opciones_perfil_scloud_opciones",
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
        ]
      },
      {
        name: "FK_usuarios_opciones_perfil_usuarios_perfil",
        using: "BTREE",
        fields: [
          { name: "id_perfil" },
        ]
      },
    ]
  });
};
