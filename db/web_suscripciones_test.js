const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones_test', {
    id_suscripcion_test: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_test: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_general',
        key: 'id'
      }
    },
    id_suscripcion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones',
        key: 'id_suscripcion'
      }
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones_test',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_test" },
        ]
      },
      {
        name: "FK_web_suscripciones_test_web_suscripciones",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
      {
        name: "FK_web_suscripciones_test_test_general",
        using: "BTREE",
        fields: [
          { name: "id_test" },
        ]
      },
    ]
  });
};
