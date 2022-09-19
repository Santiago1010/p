const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_hvp_events', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    created_at: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: ""
    },
    sub_type: {
      type: DataTypes.STRING(63),
      allowNull: false,
      defaultValue: ""
    },
    content_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    content_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    library_name: {
      type: DataTypes.STRING(127),
      allowNull: false,
      defaultValue: ""
    },
    library_version: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_hvp_events',
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
