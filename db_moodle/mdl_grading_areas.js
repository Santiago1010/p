const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grading_areas', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    areaname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    activemethod: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_grading_areas',
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
        name: "mdl_gradarea_concomare_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "component" },
          { name: "areaname" },
        ]
      },
      {
        name: "mdl_gradarea_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
