const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_empleados_contrato',
    {
      codcontrato: {
        type: DataTypes.STRING(80),
        allowNull: false,
        primaryKey: true,
      },
      codusr: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: '',
        primaryKey: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      tipo: {
        type: DataTypes.ENUM('Término Fijo', 'Término indefinido', 'Civil por prestación de servicios', 'Aprendizaje'),
        allowNull: true,
        defaultValue: 'Término Fijo',
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      periodo_prueba: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'Periodo de prueba del contrato',
      },
      addusr: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      valor: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true,
      },
      valor_total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fchliquidacion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      usrliquidacion: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      mod_contrato: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_contratos_modelos',
          key: 'id',
        },
      },
      auxilio: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true,
      },
      horario: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      lugar_trabajo: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      validado_en: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: 'Fecha  de validación del contrato',
      },
      firma: {
        type: DataTypes.STRING(150),
        allowNull: true,
        comment: 'Link a la firma del empleado',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'adm_empleados_contrato',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codcontrato' }, { name: 'codusr' }],
        },
        {
          name: 'FK_adm_empleados_contrato_adm_empleados',
          using: 'BTREE',
          fields: [{ name: 'codusr' }],
        },
        {
          name: 'mod_contrato',
          using: 'BTREE',
          fields: [{ name: 'mod_contrato' }],
        },
      ],
    }
  );
};
