const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_entrevistas_compromisos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_entrevista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admision_aspirantes_entrevistas',
        key: 'id'
      }
    },
    texto: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    fechaadd: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_entrevistas_compromisos',
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
        name: "FK__admision_aspirantes_entrevistas",
        using: "BTREE",
        fields: [
          { name: "id_entrevista" },
        ]
      },
    ]
  });
};
