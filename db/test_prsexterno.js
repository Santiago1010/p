const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_prsexterno', {
    identificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    telefonos: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    correos: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fechamax: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: false
    },
    addusr: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'test_prsexterno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identificacion" },
        ]
      },
    ]
  });
};
