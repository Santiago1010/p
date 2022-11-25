const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_formularios', {
    id_formulario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_formulario: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha_add: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_formularios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_formulario" },
        ]
      },
    ]
  });
};
