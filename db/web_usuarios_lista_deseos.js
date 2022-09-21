const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_usuarios_lista_deseos', {
    id_usuario_lista_deseo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    id_ruta_aprendizaje: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_rutas_aprendizaje',
        key: 'id_ruta_aprendizaje'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
      }
    }
  }, {
    sequelize,
    tableName: 'web_usuarios_lista_deseos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_lista_deseo" },
        ]
      },
      {
        name: "id_usuario_id_ruta_aprendizaje",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_ruta_aprendizaje" },
        ]
      },
      {
        name: "FK_web_usuarios_lista_deseos_web_rutas_aprendizaje",
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje" },
        ]
      },
      {
        name: "web_usuarios_lista_deseos_FK",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
