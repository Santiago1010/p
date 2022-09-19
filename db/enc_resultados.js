const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_resultados', {
    codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_encuentas: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'enc_configuracion',
        key: 'cod_encuesta'
      }
    },
    evaluador: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cod_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enc_preguntas',
        key: 'codpreg'
      }
    },
    codopc: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    anio: {
      type: DataTypes.DATE(4),
      allowNull: false
    },
    fcheval: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'enc_resultados',
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
        name: "FK_enc_resultados_enc_configuracion",
        using: "BTREE",
        fields: [
          { name: "cod_encuentas" },
        ]
      },
      {
        name: "FK_enc_resultados_enc_preguntas",
        using: "BTREE",
        fields: [
          { name: "cod_pregunta" },
        ]
      },
    ]
  });
};
