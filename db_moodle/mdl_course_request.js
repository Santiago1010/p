const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_request', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    shortname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summaryformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    requester: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_course_request',
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
        name: "mdl_courrequ_sho_ix",
        using: "BTREE",
        fields: [
          { name: "shortname" },
        ]
      },
    ]
  });
};
