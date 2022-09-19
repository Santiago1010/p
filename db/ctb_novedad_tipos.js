const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_tipos', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM('Ingreso','Deducción'),
      allowNull: true
    },
    generado: {
      type: DataTypes.ENUM('Usuario','Sistema'),
      allowNull: true
    },
    addusr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    forma: {
      type: DataTypes.ENUM('valor','fecha','dia','hora'),
      allowNull: true,
      defaultValue: "valor"
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_tipos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
