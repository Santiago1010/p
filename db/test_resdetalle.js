const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_resdetalle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_resgeneral: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_resgeneral',
        key: 'id'
      }
    },
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
      allowNull: false
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
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_testAutoestima_parametros",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
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
          { name: "id_resgeneral" },
        ]
      },
    ]
  });
};
