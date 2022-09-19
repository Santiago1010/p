const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_backup_courses', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      unique: "mdl_backcour_cou_uix"
    },
    laststarttime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastendtime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    laststatus: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "5"
    },
    nextstarttime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_backup_courses',
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
        name: "mdl_backcour_cou_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
