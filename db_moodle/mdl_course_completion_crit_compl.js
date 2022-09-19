const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_completion_crit_compl', {
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
    criteriaid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    gradefinal: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    unenroled: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecompleted: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_course_completion_crit_compl',
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
        name: "mdl_courcompcritcomp_useco_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "course" },
          { name: "criteriaid" },
        ]
      },
      {
        name: "mdl_courcompcritcomp_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_courcompcritcomp_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_courcompcritcomp_cri_ix",
        using: "BTREE",
        fields: [
          { name: "criteriaid" },
        ]
      },
      {
        name: "mdl_courcompcritcomp_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timecompleted" },
        ]
      },
    ]
  });
};
