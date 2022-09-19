const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departamentos_opciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_departamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departamentos',
        key: 'id'
      }
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'opciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'departamentos_opciones',
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
        name: "FK__departamentos",
        using: "BTREE",
        fields: [
          { name: "id_departamento" },
        ]
      },
      {
        name: "FK__opciones",
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
        ]
      },
    ]
  });
};
