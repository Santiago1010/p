const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_resgeneral',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_test: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_general',
          key: 'id',
        },
      },
      id_web_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
      },
      derecho: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      central: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      izquierdo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      dominante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_cerebros',
          key: 'id',
        },
      },
      subdominante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_cerebros',
          key: 'id',
        },
      },
      error: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      actualizado_enganche: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      derecho_ejec: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      derecho_sup: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      derecho_ase: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      derecho_com: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      central_ejec: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      central_sup: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      central_ase: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      central_com: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      izquierdo_ejec: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      izquierdo_sup: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      izquierdo_ase: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      izquierdo_com: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      solucion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      espacio: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cronologia_ini: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      cronologia_fin: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      cronologia_hora: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      personaje: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      otropersonaje: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      proced_actividades: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      proced_ejecutadas: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      proced_hacer: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      proced_recursos: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      proced_indicadores: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      proced_exigidor: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      proced_sanciones: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      usradd: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: '0',
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'test_resgeneral',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'test_resgeneral_id_test_IDX',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_test' }, { name: 'id_web_usuario' }],
        },
        {
          name: 'FK_test_resgeneral_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_web_usuario' }],
        },
        {
          name: 'test_resgeneral_FK',
          using: 'BTREE',
          fields: [{ name: 'dominante' }],
        },
        {
          name: 'test_resgeneral_FK_1',
          using: 'BTREE',
          fields: [{ name: 'subdominante' }],
        },
      ],
    }
  );
};
