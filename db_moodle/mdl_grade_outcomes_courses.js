const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_outcomes_courses', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    outcomeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_outcomes_courses',
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
        name: "mdl_gradoutccour_couout_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "outcomeid" },
        ]
      },
      {
        name: "mdl_gradoutccour_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_gradoutccour_out_ix",
        using: "BTREE",
        fields: [
          { name: "outcomeid" },
        ]
      },
    ]
  });
};
