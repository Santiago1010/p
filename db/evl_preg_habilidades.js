const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_preg_habilidades', {
    codmat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'acd_escuelas',
        key: 'codesc'
      }
    },
    codpreg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'enc_preguntas',
        key: 'codpreg'
      }
    }
  }, {
    sequelize,
    tableName: 'evl_preg_habilidades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codmat" },
          { name: "codpreg" },
        ]
      },
      {
        name: "FK_evl_preg_habilidades_evl_preguntas",
        using: "BTREE",
        fields: [
          { name: "codpreg" },
        ]
      },
    ]
  });
};
