const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_perfil_encuesta', {
    codperfil: {
      type: DataTypes.ENUM('Estudiante','Docente','Padre','Externo','Empleado','Admisiones'),
      allowNull: false,
      primaryKey: true
    },
    cod_encuenta: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'enc_configuracion',
        key: 'cod_encuesta'
      }
    },
    cursos: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'enc_perfil_encuesta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codperfil" },
          { name: "cod_encuenta" },
        ]
      },
      {
        name: "FK_enc_perfil_encuesta_enc_configuracion",
        using: "BTREE",
        fields: [
          { name: "cod_encuenta" },
        ]
      },
    ]
  });
};
