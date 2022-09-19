const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('terceros', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ident: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    p_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    p_apellido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_apellido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "celular"
    },
    direccion: {
      type: DataTypes.STRING(280),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'terceros',
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
        name: "celular",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "celular" },
        ]
      },
    ]
  });
};
