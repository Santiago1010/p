const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_resgeneral', {
    codest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codevl: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    grado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notificado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    derecho: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    central: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    izquierdo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    derecho_ejec: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    derecho_sup: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    derecho_ase: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    derecho_com: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_ejec: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_sup: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_ase: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    central_com: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_ejec: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_sup: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_ase: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    izquierdo_com: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    solucion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    espacio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cronologia_ini: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cronologia_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cronologia_hora: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    personaje: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    otropersonaje: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    proced_actividades: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_ejecutadas: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_hacer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_recursos: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_indicadores: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    proced_exigidor: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    proced_sanciones: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    usradd: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: "0"
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_resgeneral',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codest" },
          { name: "codevl" },
        ]
      },
    ]
  });
};
