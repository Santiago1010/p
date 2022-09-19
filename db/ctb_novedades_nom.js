const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedades_nom', {
    codigo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    concepto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_novedad_tipos',
        key: 'codigo'
      }
    },
    codcontrato: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codusr: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    hora: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dias_no_habiles: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    obersavacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    addusr: {
      type: DataTypes.STRING(30),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: true,
      defaultValue: "0",
      comment: "'0=Generada','1=Pagada','2=Aplazada','3=Eliminada'"
    }
  }, {
    sequelize,
    tableName: 'ctb_novedades_nom',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_ctb_novedades_nom_ctb_novedad_tipos",
        using: "BTREE",
        fields: [
          { name: "concepto" },
        ]
      },
      {
        name: "FK_ctb_novedades_nom_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "codusr" },
        ]
      },
      {
        name: "ctb_novedades_nom_FK",
        using: "BTREE",
        fields: [
          { name: "addusr" },
        ]
      },
    ]
  });
};
