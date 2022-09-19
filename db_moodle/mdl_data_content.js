const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_data_content', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fieldid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    recordid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content4: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_data_content',
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
        name: "mdl_datacont_rec_ix",
        using: "BTREE",
        fields: [
          { name: "recordid" },
        ]
      },
      {
        name: "mdl_datacont_fie_ix",
        using: "BTREE",
        fields: [
          { name: "fieldid" },
        ]
      },
    ]
  });
};
