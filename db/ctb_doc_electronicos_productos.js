const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_doc_electronicos_productos', {
    id_doc_electronico_producto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_productos',
        key: 'id_producto'
      }
    },
    id_doc_electronico: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_doc_electronicos',
        key: 'id_doc_electronico'
      }
    }
  }, {
    sequelize,
    tableName: 'ctb_doc_electronicos_productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_doc_electronico_producto" },
        ]
      },
      {
        name: "FK_ctb_doc_electronicos_productos_ctb_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "FK_ctb_doc_electronicos_productos_ctb_doc_electronicos",
        using: "BTREE",
        fields: [
          { name: "id_doc_electronico" },
        ]
      },
    ]
  });
};
