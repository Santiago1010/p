const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_dataprivacy_purpose', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    lawfulbases: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sensitivedatareasons: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    retentionperiod: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    protected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    usermodified: {
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
    tableName: 'mdl_tool_dataprivacy_purpose',
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
    ]
  });
};
