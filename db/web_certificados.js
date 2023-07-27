const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_certificados',
    {
      id_certificado: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_certificado: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      paragrafo_certifcado: {
        type: DataTypes.ENUM('Certifica a:', 'Otorga a:'),
        allowNull: true,
      },
      contenido_certificado: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      fondo_certificado: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      color_footer: {
        type: DataTypes.STRING(7),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.ENUM('cursos', 'programas', 'cursosEmpresa'),
        allowNull: false,
        defaultValue: 'cursos',
      },
      personalizado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment:
          'Si la plantilla de certifcado es personalizada o no, solo deberia haber maximo 1 certificado default por tipo',
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
      tableName: 'web_certificados',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_certificado' }],
        },
      ],
    }
  );
};
