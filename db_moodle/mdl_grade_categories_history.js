const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_categories_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    oldid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    loggeduser: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    aggregatesubcats: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_categories_history',
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
        name: "mdl_gradcatehist_act_ix",
        using: "BTREE",
        fields: [
          { name: "action" },
        ]
      },
      {
        name: "mdl_gradcatehist_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_gradcatehist_old_ix",
        using: "BTREE",
        fields: [
          { name: "oldid" },
        ]
      },
      {
        name: "mdl_gradcatehist_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_gradcatehist_par_ix",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
      {
        name: "mdl_gradcatehist_log_ix",
        using: "BTREE",
        fields: [
          { name: "loggeduser" },
        ]
      },
    ]
  });
};
