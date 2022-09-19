const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_preguntas_encuesta', {
    codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enc_preguntas',
        key: 'codpreg'
      }
    },
    cod_encuesta: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'enc_configuracion',
        key: 'cod_encuesta'
      }
    }
  }, {
    sequelize,
    tableName: 'enc_preguntas_encuesta',
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
      {
        name: "FK_enc_preguntas_encuesta_enc_preguntas",
        using: "BTREE",
        fields: [
          { name: "cod_pregunta" },
        ]
      },
      {
        name: "FK_enc_preguntas_encuesta_enc_configuracion",
        using: "BTREE",
        fields: [
          { name: "cod_encuesta" },
        ]
      },
    ]
  });
};
