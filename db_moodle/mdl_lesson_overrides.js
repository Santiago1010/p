const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lesson_overrides', {
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
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    available: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deadline: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timelimit: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    review: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    maxattempts: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    retake: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_lesson_overrides',
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
        name: "mdl_lessover_les_ix",
        using: "BTREE",
        fields: [
          { name: "lessonid" },
        ]
      },
      {
        name: "mdl_lessover_gro_ix",
        using: "BTREE",
        fields: [
          { name: "groupid" },
        ]
      },
      {
        name: "mdl_lessover_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
