const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_familiares', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes',
        key: 'id'
      }
    },
    id_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_familiares',
        key: 'id'
      }
    },
    tipo_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_tipos_familiares',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_familiares',
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
        name: "id_aspirante_id_familiar_tipo_familiar",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
          { name: "id_familiar" },
          { name: "tipo_familiar" },
        ]
      },
      {
        name: "FK_admision_aspirantes_familiares_admision_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_admision_aspirantes_familiares_admision_aspirantes",
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
      {
        name: "FK_admision_aspirantes_familiares_config_tipos_familiares",
        using: "BTREE",
        fields: [
          { name: "tipo_familiar" },
        ]
      },
    ]
  });
};
