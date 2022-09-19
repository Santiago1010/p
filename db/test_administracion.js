const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_administracion', {
    codtest: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    codpreg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'test_preguntas',
        key: 'codpre'
      }
    }
  }, {
    sequelize,
    tableName: 'test_administracion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codtest" },
          { name: "codpreg" },
        ]
      },
      {
        name: "FK_test_administracion_test_preguntas",
        using: "BTREE",
        fields: [
          { name: "codpreg" },
        ]
      },
    ]
  });
};
