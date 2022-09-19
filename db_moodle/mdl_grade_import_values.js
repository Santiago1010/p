const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_import_values', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    newgradeitem: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    finalgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    importcode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    importer: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    importonlyfeedback: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_import_values',
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
        name: "mdl_gradimpovalu_ite_ix",
        using: "BTREE",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_gradimpovalu_new_ix",
        using: "BTREE",
        fields: [
          { name: "newgradeitem" },
        ]
      },
      {
        name: "mdl_gradimpovalu_imp_ix",
        using: "BTREE",
        fields: [
          { name: "importer" },
        ]
      },
    ]
  });
};
