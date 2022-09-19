const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol_lti_lti2_consumer', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    consumerkey256: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_enroltilti2cons_con_uix"
    },
    consumerkey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secret: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      defaultValue: ""
    },
    ltiversion: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    consumername: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consumerversion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    consumerguid: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    toolproxy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    protected: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    enablefrom: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    enableuntil: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    lastaccess: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    created: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_enrol_lti_lti2_consumer',
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
        name: "mdl_enroltilti2cons_con_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "consumerkey256" },
        ]
      },
    ]
  });
};
