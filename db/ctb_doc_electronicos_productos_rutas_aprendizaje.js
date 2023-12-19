const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_doc_electronicos_productos_rutas_aprendizaje',
    {
      id_doc_electronico_producto_ruta_aprendizaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_doc_electronico_producto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_doc_electronicos_productos',
          key: 'id_doc_electronico_producto',
        },
      },
      id_ruta_aprendizaje: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_rutas_aprendizaje',
          key: 'id_ruta_aprendizaje',
        },
      },
    },
    {
      sequelize,
      tableName: 'ctb_doc_electronicos_productos_rutas_aprendizaje',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_doc_electronico_producto_ruta_aprendizaje' }],
        },
        {
          name: 'ctb_doc_electronicos_productos_rutas_aprendizaje_FK',
          using: 'BTREE',
          fields: [{ name: 'id_doc_electronico_producto' }],
        },
        {
          name: 'ctb_doc_electronicos_productos_rutas_aprendizaje_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_ruta_aprendizaje' }],
        },
      ],
    }
  );
};
