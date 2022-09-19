const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_data_fields', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dataid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    param1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param9: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param10: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_data_fields',
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
        name: "mdl_datafiel_typdat_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "dataid" },
        ]
      },
      {
        name: "mdl_datafiel_dat_ix",
        using: "BTREE",
        fields: [
          { name: "dataid" },
        ]
      },
    ]
  });
};
