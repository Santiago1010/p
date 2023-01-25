const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'mdl_course',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      category: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      sortorder: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      fullname: {
        type: DataTypes.STRING(254),
        allowNull: false,
        defaultValue: '',
      },
      shortname: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
      idnumber: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: '',
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      summaryformat: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      format: {
        type: DataTypes.STRING(21),
        allowNull: false,
        defaultValue: 'topics',
      },
      showgrades: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      newsitems: {
        type: DataTypes.MEDIUMINT,
        allowNull: false,
        defaultValue: 1,
      },
      startdate: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      enddate: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      relativedatesmode: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      marker: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      maxbytes: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      legacyfiles: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      showreports: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      visibleold: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      groupmode: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      groupmodeforce: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      defaultgroupingid: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      lang: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: '',
      },
      calendartype: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: '',
      },
      theme: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
      },
      timecreated: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      timemodified: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      requested: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      enablecompletion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      completionnotify: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      cacherev: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'mdl_course',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'mdl_cour_cat_ix',
          using: 'BTREE',
          fields: [{ name: 'category' }],
        },
        {
          name: 'mdl_cour_idn_ix',
          using: 'BTREE',
          fields: [{ name: 'idnumber' }],
        },
        {
          name: 'mdl_cour_sho_ix',
          using: 'BTREE',
          fields: [{ name: 'shortname' }],
        },
        {
          name: 'mdl_cour_sor_ix',
          using: 'BTREE',
          fields: [{ name: 'sortorder' }],
        },
      ],
    }
  );
};
