const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_usuarios_redes', {
    id_usuario_red: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_red: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_redes_sociales',
        key: 'id_red'
      }
    },
    id_web_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    }
  }, {
    sequelize,
    tableName: 'web_usuarios_redes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_red" },
        ]
      },
      {
        name: "FK_web_usuarios_redes_web_redes_sociales",
        using: "BTREE",
        fields: [
          { name: "id_red" },
        ]
      },
      {
        name: "FK_web_usuarios_redes_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_web_usuario" },
        ]
      },
    ]
  });
};
