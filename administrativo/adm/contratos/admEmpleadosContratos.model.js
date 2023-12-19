'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'adm_empleados_contrato';
const MODEL_NAME = 'admEmpleadosContrato';

const Schema = {
  codcontrato: {
    type: DataTypes.STRING(80),
    allowNull: false,
    primaryKey: true,
  },
  idTipo: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: 1,
    field: 'id_tipo',
  },
  codusr: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
    defaultValue: '',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null,
    field: 'fecha_fin',
  },
  periodoPrueba: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
    comment: 'Periodo de prueba del contrato',
    field: 'periodo_prueba',
  },
  addusr: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
    defaultValue: null,
  },
  valorTotal: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
    field: 'valor_total',
  },
  fchliquidacion: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  usrliquidacion: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      const fin = this.getDataValue('fechaFin');
      const firma = this.getDataValue('firma');
      const validadoEn = this.getDataValue('validadoEn');
      const fchliquidacion = this.getDataValue('fchliquidacion');
      const usrliquidacion = this.getDataValue('usrliquidacion');

      const today = new Date().getTime();
      const fechaInicio = new Date(this.getDataValue('fechaInicio')).getTime();
      const fechaFin = fin ? new Date(fin).getTime() : fin;

      const isVigente = today >= fechaInicio && (fechaFin === null || today <= fechaFin);
      const isActivo = firma !== null || validadoEn !== null;
      const isLiquidado = fchliquidacion !== null && usrliquidacion !== null;

      if (isLiquidado) {
        return 'Liquidado';
      }

      if (today < fechaInicio || (!isActivo && !isLiquidado)) {
        return 'No vigente';
      }

      if (isVigente) {
        return isActivo ? 'Activo' : 'No vigente';
      }

      return 'Por liquidar';
    },
    set() {
      throw new Error('`estado` es un campo virtual y no se le puede agregar un valor');
    },
  },
  finalizacionPeriodoPrueba: {
    type: DataTypes.VIRTUAL,
    get() {
      const periodoPrueba = this.getDataValue('periodoPrueba');

      const duracion = {
        año: 365 * 24 * 60 * 60 * 1000,
        mes: 30 * 24 * 60 * 60 * 1000,
        día: 24 * 60 * 60 * 1000,
      };

      const unidades = ['año', 'mes', 'día'];
      const ahora = new Date();
      const fechaFinalizacion = new Date(periodoPrueba);
      let diferenciaEnMilisegundos = fechaFinalizacion - ahora;

      if (diferenciaEnMilisegundos <= 0) {
        return 'Finalizado';
      }

      const tiempoFaltante = unidades
        .map((unidad) => {
          const cantidad = Math.floor(diferenciaEnMilisegundos / duracion[unidad]);
          diferenciaEnMilisegundos %= duracion[unidad];
          return cantidad > 0 ? `${cantidad} ${unidad}${cantidad > 1 ? (unidad !== 'mes' ? 's' : 'es') : ''}` : '';
        })
        .filter(Boolean)
        .join(', ')
        .replace(/,([^,]*)$/, ' y$1');

      //return `El período de prueba finaliza en ${tiempoFaltante}`;
      return tiempoFaltante;
    },
    set() {
      throw new Error('`finalizacionPeriodoPrueba` es un campo virtual y no se le puede agregar un valor');
    },
  },
  modContrato: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
    field: 'mod_contrato',
  },
  auxilio: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
    defaultValue: null,
  },
  horario: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null,
  },
  lugarTrabajo: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null,
    field: 'lugar_trabajo',
  },
  validadoEn: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    comment: 'Fecha de validación del contrato',
    field: 'validado_en',
  },
  firma: {
    type: DataTypes.STRING(150),
    allowNull: true,
    defaultValue: null,
    comment: 'Link a la firma del empleado',
    get() {
      const firma = this.getDataValue('firma');
      const hostImage = config.images.host;
      if (!firma) {
        return null;
      }
      return `${hostImage}${firma}`;
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'codusr',
      as: 'empleado',
    });
    this.belongsTo(models.admContratosModelos, {
      foreignKey: 'modContrato',
      as: 'contratoModelo',
    });
    this.belongsTo(models.admContratosTipos, {
      foreignKey: 'idTipo',
      as: 'tipoContrato',
    });
    this.hasMany(models.admEmpleadosContratoAnexos, {
      foreignKey: 'idContrato',
      as: 'empleadosContratoAnexos',
    });
    this.belongsToMany(models.admContratosModelos, {
      through: { model: models.admEmpleadosContratoAnexos, unique: false },
      foreignKey: 'idContrato',
      otherKey: 'modAnexo',
      as: 'anexos',
    });
    this.hasMany(models.admContratosFunciones, {
      foreignKey: 'codContrato',
      as: 'funciones',
    });
    this.belongsToMany(models.admFunciones, {
      through: { model: models.admContratosFunciones },
      foreignKey: 'codContrato',
      otherKey: 'idFuncion',
      as: 'contratoFunciones',
    });
    this.hasMany(models.acfActas, { as: 'actas', foreignKey: 'idContratoRecibe' });
    this.hasMany(models.ctbNovedadesNom, { as: 'novedadesNomina', foreignKey: 'codcontrato' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
