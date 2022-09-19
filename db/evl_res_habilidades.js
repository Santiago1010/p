const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_res_habilidades', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    },
    codpre: {
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
    codevld: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ciclo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    codmat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_escuelas',
        key: 'codesc'
      }
    },
    codgrado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'evl_res_habilidades',
    timestamps: false,
    indexes: [
      {
        name: "FK_evl_res_habilidades_gnr_parametros",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
      {
        name: "FK_evl_res_habilidades_enc_preguntas",
        using: "BTREE",
        fields: [
          { name: "codpre" },
        ]
      },
      {
        name: "FK_evl_res_habilidades_acd_escuelas",
        using: "BTREE",
        fields: [
          { name: "codmat" },
        ]
      },
    ]
  });
};
