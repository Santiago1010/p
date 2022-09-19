const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_config_entrevistas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_entrevista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_entrevistas',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    depende: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_entrevistas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'admision_config_entrevistas',
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
        name: "FK_admision_config_entrevistas_config_entrevistas",
        using: "BTREE",
        fields: [
          { name: "id_entrevista" },
        ]
      },
      {
        name: "FK_admision_config_entrevistas_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_admision_config_entrevistas_config_entrevistas_2",
        using: "BTREE",
        fields: [
          { name: "depende" },
        ]
      },
    ]
  });
};
