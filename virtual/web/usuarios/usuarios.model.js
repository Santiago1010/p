'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_usuarios';
const MODEL_NAME = 'webUsuarios';

const Schema = {
  idUsuario: {
    field: 'id_usuario',
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  tipoDoc: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '0',
    field: 'tipo_doc',
  },
  documento: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '0',
  },
  nombreCompleto: {
    field: 'nombre_completo_usuario',
    type: DataTypes.STRING,
  },
  pNombre: {
    field: 'p_nombre_usuario',
    type: DataTypes.STRING,
  },
  sNombre: {
    field: 's_nombre_usuario',
    type: DataTypes.STRING,
  },
  pApellido: {
    field: 'p_apellido_usuario',
    type: DataTypes.STRING,
  },
  sApellido: {
    field: 's_apellido_usuario',
    type: DataTypes.STRING,
  },
  email: {
    field: 'email_usuario',
    type: DataTypes.STRING,
  },
  celular: {
    field: 'celular_usuario',
    type: DataTypes.STRING,
  },
  password: {
    field: 'password_usuario',
    type: DataTypes.STRING,
  },
  testCerebral: {
    field: 'aplico_test_cerebral',
    type: DataTypes.INTEGER,
  },
  cambiarPassword: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    field: 'cambiar_password',
  },
  testCerebralCount: {
    field: 'nro_test_cerebral',
    type: DataTypes.INTEGER,
  },
  fechaNacimiento: {
    field: 'fecha_nacimiento',
    type: DataTypes.DATEONLY,
    defaultValue: new Date('2000-01-01'),
  },
  edad: {
    type: DataTypes.VIRTUAL,
    get() {
      let hoy = new Date();
      let nacimiento = new Date(this.fechaNacimiento);
      let edad = hoy.getFullYear() - nacimiento.getFullYear();
      let mes = hoy.getMonth() - nacimiento.getMonth();

      if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad -= 1;
      }
      return edad;
    },
    set(value) {
      throw new Error('Edad es un campo virtual no se puede guardar');
    },
  },
  idFoto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_imagenes',
      key: 'id_imagen',
    },
    field: 'foto_usuario',
  },
  idPortada: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_imagenes',
      key: 'id_imagen',
    },
    field: 'portada_usuario',
  },
  sobreMi: {
    type: DataTypes.STRING(300),
    field: 'sobre_mi',
  },
  tokenRecuperacion: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'token_recuperacion',
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
    this.hasOne(models.webImagenes, { as: 'foto', foreignKey: 'idImagen', sourceKey: 'idFoto' });
    this.hasOne(models.webImagenes, { as: 'portada', foreignKey: 'idImagen', sourceKey: 'idPortada' });
    this.hasMany(models.testResgeneral, { as: 'respuestasTests', foreignKey: 'idWebUsuario' });
    this.hasMany(models.webCursosRating, { as: 'ratingCursos', foreignKey: 'idUsuario' });
    this.hasMany(models.webRutasAprendizajeCursosUsuarios, { as: 'progresoCursos', foreignKey: 'idUsuario' });
    this.hasMany(models.testActividadesEjerciciosUsuarios, { as: 'ejerciciosUsuario', foreignKey: 'idUsuario' });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webUsuariosSuscripciones },
      as: 'suscripciones',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.webUsuariosEmpresas, {
      as: 'usuarioEmpresas',
      foreignKey: 'idUsuario',
    });
    this.belongsToMany(models.webEmpresas, {
      through: { model: models.webUsuariosEmpresas },
      as: 'empresas',
      foreignKey: 'idUsuario',
    });
    this.belongsToMany(models.webRedesSociales, {
      through: { model: models.webUsuariosRedes },
      as: 'redes',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.webCursosQuizResgeneral, { as: 'repuestasQuiz', foreignKey: 'idUsuario' });
    this.hasMany(models.webEventosAsistencias, { as: 'eventosAsistencias', foreignKey: 'idUsuario' });
    this.hasMany(models.webSuscripcionesCurriculosEstudiantes, {
      as: 'estudiantesCurriculo',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.webRetosProgresoUsuarios, { as: 'progresoRetos', foreignKey: 'idUsuario' });
    this.hasMany(models.planNegocioArchivos, { as: 'planNegocioArchivos', foreignKey: 'idUsuario' });
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
