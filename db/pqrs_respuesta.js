const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pqrs_respuesta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    destinatario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    asunto: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    respuesta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    adjunto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pqrs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pqrs',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'pqrs_respuesta',
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
        name: "pqrs_respuesta_FK",
        using: "BTREE",
        fields: [
          { name: "pqrs_id" },
        ]
      },
      {
        name: "pqrs_respuesta_FK_1",
        using: "BTREE",
        fields: [
          { name: "destinatario" },
        ]
      },
    ]
  });
};
