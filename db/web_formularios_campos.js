const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_formularios_campos', {
    id_formulario_campo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_formulario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_formularios',
        key: 'id_formulario'
      }
    },
    id_campo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_campos',
        key: 'id_campo'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'web_formularios_campos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_formulario_campo" },
        ]
      },
      {
        name: "FK_web_formularios_campos_web_formularios",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_formulario" },
          { name: "id_campo" },
        ]
      },
      {
        name: "FK_web_formularios_campos_web_campos",
        using: "BTREE",
        fields: [
          { name: "id_campo" },
        ]
      },
    ]
  });
};
