const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_escuelas_imagenes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codesc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acd_escuelas',
        key: 'codesc'
      }
    },
    imagen: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acd_escuelas_imagenes',
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
        name: "FK_acd_escuelas_imagenes_acd_escuelas",
        using: "BTREE",
        fields: [
          { name: "codesc" },
        ]
      },
    ]
  });
};
