const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_documentos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_admision: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'admision_aspirantes_anio',
        key: 'id'
      }
    },
    id_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_documentos',
        key: 'id'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = no revisado 1 = revisado 2 = observacion"
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_documentos',
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
        name: "FK_admision_documentos_admision_aspirantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_admision" },
        ]
      },
      {
        name: "FK_admision_aspirantes_documentos_config_documentos",
        using: "BTREE",
        fields: [
          { name: "id_documento" },
        ]
      },
      {
        name: "FK_admision_aspirantes_documentos_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
