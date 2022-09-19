const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_grupos_integrantes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codemp: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    idgrupo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_grupos',
        key: 'id'
      }
    },
    cargo: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0= integrante \/\/ 1 = jefe \/\/ 2 = principal "
    }
  }, {
    sequelize,
    tableName: 'adm_grupos_integrantes',
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
        name: "NewTable_FK",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
      {
        name: "NewTable_FK_1",
        using: "BTREE",
        fields: [
          { name: "idgrupo" },
        ]
      },
    ]
  });
};
