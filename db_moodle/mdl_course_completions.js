const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_completions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeenrolled: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timestarted: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecompleted: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reaggregate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_course_completions',
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
        name: "mdl_courcomp_usecou_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "course" },
        ]
      },
      {
        name: "mdl_courcomp_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_courcomp_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_courcomp_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timecompleted" },
        ]
      },
    ]
  });
};
