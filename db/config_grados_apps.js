const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_grados_apps', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_app: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_apps',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'config_grados_apps',
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
        name: "FK_config_grados_apps_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_config_grados_apps_matricula_apps",
        using: "BTREE",
        fields: [
          { name: "id_app" },
        ]
      },
    ]
  });
};
