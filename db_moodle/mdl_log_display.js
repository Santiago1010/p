const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_log_display', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    module: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    action: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    mtable: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    field: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_log_display',
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
        name: "mdl_logdisp_modact_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module" },
          { name: "action" },
        ]
      },
    ]
  });
};
