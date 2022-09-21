const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_resdetalle', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    codpre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_preguntas',
        key: 'codpre'
      }
    },
    resppre: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    codevld: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_resgeneral',
        key: 'codest'
      }
    },
    codgrd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "codigo del grado"
    },
    fchevld: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'test_resdetalle',
    timestamps: false,
    indexes: [
      {
        name: "FK_evl_testautoestima_test_preguntas",
        using: "BTREE",
        fields: [
          { name: "codpre" },
        ]
      },
      {
        name: "FK_test_resdetalle_test_resgeneral",
        using: "BTREE",
        fields: [
          { name: "codevld" },
        ]
      },
    ]
  });
};
