const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_categories', {
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
    parent: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    depth: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    aggregation: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    keephigh: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    droplow: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    aggregateonlygraded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    aggregateoutcomes: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_categories',
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
        name: "mdl_gradcate_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_gradcate_par_ix",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
    ]
  });
};
