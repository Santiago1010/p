'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_usuarios';
const MODEL_NAME = 'bizUsuarios';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(155),
    allowNull: false,
    unique: 'username',
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  empresaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_empresas',
      key: 'id_empresa',
    },
    field: 'empresa_id',
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'biz_roles',
      key: 'id',
    },
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_fin',
  },
  licencias: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  celular: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  documento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idFoto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_imagenes',
      key: 'id_imagen',
    },
    field: 'id_foto',
  },
  idWebUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_web_usuario',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let deletedAt = this.getDataValue('deletedAt');
      return deletedAt ? 0 : 1;
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    //asociations for sequelize
    this.hasOne(models.webImagenes, { as: 'foto', foreignKey: 'idImagen', sourceKey: 'idFoto' });
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'empresaId' });
    this.belongsTo(models.bizRoles, { as: 'userRol', foreignKey: 'rol' });
    this.belongsToMany(models.bizOpciones, {
      through: { model: models.bizUsuariosOpciones },
      as: 'opciones',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.webSuscripcionesCurriculosDocentes, {
      as: 'docentesCurriculo',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.bizUsuariosAreas, { as: 'usuariosAreas', foreignKey: 'idUsuario' });
    this.belongsToMany(models.webEmpresasAreas, {
      through: { model: models.bizUsuariosAreas },
      as: 'areas',
      foreignKey: 'idUsuario',
    });
    this.belongsToMany(models.webSuscripcionesCurriculosGrupos, {
      through: { model: models.webSuscripcionesCurriculosDocentes },
      as: 'gruposDocente',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.webCurriculosEvaluacionesResgeneral, {
      as: 'evaluacionesResgeneral',
      foreignKey: 'idBizUsuario',
    });
    this.belongsTo(models.webUsuarios, { as: 'webUsuario', foreignKey: 'idWebUsuario' });
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
