const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_rating', {
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
    ratingarea: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    scaleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rating: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_rating',
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
        name: "mdl_rati_comratconite_ix",
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "ratingarea" },
          { name: "contextid" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_rati_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_rati_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
