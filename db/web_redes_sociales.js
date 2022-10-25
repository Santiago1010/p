const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_redes_sociales', {
    id_red: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_red: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    icon_red: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'web_redes_sociales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_red" },
        ]
      },
    ]
  });
};
