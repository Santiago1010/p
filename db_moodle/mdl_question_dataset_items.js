const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_dataset_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    definition: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    itemnumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_question_dataset_items',
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
        name: "mdl_quesdataitem_def_ix",
        using: "BTREE",
        fields: [
          { name: "definition" },
        ]
      },
    ]
  });
};
