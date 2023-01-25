const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_programas_formacion_categoria',
    {
      id_programa_formacion_categoria: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_formacion_categoria: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_porducto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_productos',
          key: 'id_producto',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_programas_formacion_categoria',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_programa_formacion_categoria' }],
        },
        {
          name: 'FK_web_programas_formacion_categoria_ctb_productos',
          using: 'BTREE',
          fields: [{ name: 'id_porducto' }],
        },
      ],
    }
  );
};
