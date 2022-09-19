const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_email_plantillas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    emails: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    asunto: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    asunto2: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mensaje2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    header: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    footer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('ACTIVO','INACTIVO'),
      allowNull: false,
      defaultValue: "ACTIVO"
    },
    observacion: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "ACTIVO"
    },
    url: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    id_plantilla_resp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_email_plantillas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'adm_email_plantillas',
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
        name: "FK_adm_email_plantillas_adm_email_plantillas",
        using: "BTREE",
        fields: [
          { name: "id_plantilla_resp" },
        ]
      },
    ]
  });
};
