const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_campos',
    {
      id_campo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_campo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.ENUM('input', 'select', 'check', 'radio'),
        allowNull: true,
        defaultValue: 'input',
      },
      obligatorio: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'web_campos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_campo' }],
        },
      ],
    }
  );
};
