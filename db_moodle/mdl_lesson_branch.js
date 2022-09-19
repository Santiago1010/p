const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lesson_branch', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lessonid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    retry: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    flag: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    timeseen: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    nextpageid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_lesson_branch',
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
        name: "mdl_lessbran_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_lessbran_les_ix",
        using: "BTREE",
        fields: [
          { name: "lessonid" },
        ]
      },
      {
        name: "mdl_lessbran_pag_ix",
        using: "BTREE",
        fields: [
          { name: "pageid" },
        ]
      },
    ]
  });
};
