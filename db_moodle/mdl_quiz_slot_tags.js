const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_slot_tags', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    slotid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tagid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tagname: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_slot_tags',
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
        name: "mdl_quizslottags_slo_ix",
        using: "BTREE",
        fields: [
          { name: "slotid" },
        ]
      },
      {
        name: "mdl_quizslottags_tag_ix",
        using: "BTREE",
        fields: [
          { name: "tagid" },
        ]
      },
    ]
  });
};
