const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_doc_electronicos_productos_componentes',
    {
      id_doc_electronico_producto_componente: {
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
      id_componente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_componentes',
          key: 'id_componente',
        },
      },
    },
    {
      sequelize,
      tableName: 'ctb_doc_electronicos_productos_componentes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_doc_electronico_producto_componente' }],
        },
        {
          name: 'ctb_doc_electronicos_productos_componentes_FK',
          using: 'BTREE',
          fields: [{ name: 'id_doc_electronico_producto' }],
        },
        {
          name: 'ctb_doc_electronicos_productos_componentes_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_componente' }],
        },
      ],
    }
  );
};
