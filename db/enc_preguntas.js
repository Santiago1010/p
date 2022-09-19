const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_preguntas', {
    codpreg: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codcategoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enc_categoria',
        key: 'codcategoria'
      }
    },
    tipo_pre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'enc_tipo_preguntas',
        key: 'codtipo'
      }
    },
    totalopc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: true,
      defaultValue: "A"
    }
  }, {
    sequelize,
    tableName: 'enc_preguntas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codpreg" },
        ]
      },
      {
        name: "FK_enc_preguntas_enc_categoria",
        using: "BTREE",
        fields: [
          { name: "codcategoria" },
        ]
      },
      {
        name: "FK_enc_preguntas_enc_tipo_preguntas",
        using: "BTREE",
        fields: [
          { name: "tipo_pre" },
        ]
      },
    ]
  });
};
