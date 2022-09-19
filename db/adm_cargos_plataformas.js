const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_cargos_plataformas', {
    idcargo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_cargos',
        key: 'codcrg'
      }
    },
    idPlataforma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_plataformas',
        key: 'id'
      }
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'adm_cargos_plataformas',
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
        name: "adm_cargos_plataformas_FK",
        using: "BTREE",
        fields: [
          { name: "idcargo" },
        ]
      },
      {
        name: "adm_cargos_plataformas_FK_1",
        using: "BTREE",
        fields: [
          { name: "idPlataforma" },
        ]
      },
    ]
  });
};
