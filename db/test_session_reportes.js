const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_session_reportes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    categoria: {
      type: DataTypes.ENUM('estandar','especial'),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    addusr: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_session_reportes',
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
    ]
  });
};
