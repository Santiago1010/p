const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_examen_ingles_compro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_examen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admision_aspirantes_examen_ingles',
        key: 'id'
      }
    },
    id_compromiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admision_config_examen_ingles_compro',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_examen_ingles_compro',
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
        name: "FK_admision_aspirantes_examen_ingle_aspirantes_examen_ingles",
        using: "BTREE",
        fields: [
          { name: "id_examen" },
        ]
      },
      {
        name: "FK_admision_aspir_config_examen_ingles_compro",
        using: "BTREE",
        fields: [
          { name: "id_compromiso" },
        ]
      },
    ]
  });
};
