const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_resdetalle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_test_resgeneral: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'test_resgeneral',
        key: 'id'
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
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_opciones',
        key: 'id'
      }
    },
    resppre: {
      type: DataTypes.STRING(20),
      allowNull: false
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
        name: "FK_evl_testautoestima_test_preguntas",
        using: "BTREE",
        fields: [
          { name: "codpre" },
        ]
      },
      {
        name: "FK_test_resdetalle_test_preguntas_opciones",
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
        ]
      },
      {
        name: "FK_test_resdetalle_test_resgeneral",
        using: "BTREE",
        fields: [
          { name: "id_test_resgeneral" },
        ]
      },
    ]
  });
};
