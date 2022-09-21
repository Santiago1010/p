const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_usuarios_niveles', {
    id_usuario_nivel: {
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
    id_nivel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_niveles',
        key: 'id_nivel'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
    tableName: 'web_usuarios_niveles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario_nivel" },
        ]
      },
      {
        name: "FK_web_usuarios_niveles_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_web_usuarios_niveles_web_niveles",
        using: "BTREE",
        fields: [
          { name: "id_nivel" },
        ]
      },
      {
        name: "web_usuarios_niveles_FK",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
