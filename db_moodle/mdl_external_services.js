const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_external_services', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_exteserv_nam_uix"
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    requiredcapability: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    restrictedusers: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    shortname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    downloadfiles: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    uploadfiles: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_external_services',
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
        name: "mdl_exteserv_nam_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
