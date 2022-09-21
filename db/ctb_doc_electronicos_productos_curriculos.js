const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_doc_electronicos_productos_curriculos', {
    id_doc_electronico_producto_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_doc_electronico_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_doc_electronicos_productos',
        key: 'id_doc_electronico_producto'
      }
    },
    id_curriculo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_curriculos',
        key: 'id_curriculo'
      }
    }
  }, {
    sequelize,
    tableName: 'ctb_doc_electronicos_productos_curriculos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_doc_electronico_producto_curriculo" },
        ]
      },
      {
        name: "ctb_doc_electronicos_productos_curriculos_FK",
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
      {
        name: "ctb_doc_electronicos_productos_curriculos_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_doc_electronico_producto" },
        ]
      },
    ]
  });
};
