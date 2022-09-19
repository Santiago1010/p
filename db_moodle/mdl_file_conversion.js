const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_file_conversion', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    },
    sourcefileid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    targetformat: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    statusmessage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    converter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destfileid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_file_conversion',
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
        name: "mdl_fileconv_sou_ix",
        using: "BTREE",
        fields: [
          { name: "sourcefileid" },
        ]
      },
      {
        name: "mdl_fileconv_des_ix",
        using: "BTREE",
        fields: [
          { name: "destfileid" },
        ]
      },
    ]
  });
};
