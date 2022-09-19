const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_completion_aggr_methd', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    criteriatype: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    method: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    value: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_course_completion_aggr_methd',
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
        name: "mdl_courcompaggrmeth_coucr_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course" },
          { name: "criteriatype" },
        ]
      },
      {
        name: "mdl_courcompaggrmeth_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_courcompaggrmeth_cri_ix",
        using: "BTREE",
        fields: [
          { name: "criteriatype" },
        ]
      },
    ]
  });
};
