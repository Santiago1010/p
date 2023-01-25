const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_empresas',
    {
      id_empresa: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_empresa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      nit_empresa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      direccion_empresa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      correo_empresa: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_web_empresa_asesor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas_asesores',
          key: 'id_web_empresa_asesor',
        },
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      logo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      digito_empresa: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      razon_social: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      telefono: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      celular: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },
      fecha_constitucion: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      responsable_iva: {
        type: DataTypes.ENUM('n', 's'),
        allowNull: true,
      },
      rut_url: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cc_url: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: 'camara comercio fiole',
      },
      id_pais: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_paises',
          key: 'id',
        },
      },
      id_ciudad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_ciudades',
          key: 'idCiudades',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_empresas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
        {
          name: 'FK_web_empresas_web_empresas_asesores',
          using: 'BTREE',
          fields: [{ name: 'id_web_empresa_asesor' }],
        },
        {
          name: 'FK_web_empresas_web_adm_paises',
          using: 'BTREE',
          fields: [{ name: 'id_pais' }],
        },
        {
          name: 'FK_web_empresas_web_adm_ciudades',
          using: 'BTREE',
          fields: [{ name: 'id_ciudad' }],
        },
      ],
    }
  );
};
