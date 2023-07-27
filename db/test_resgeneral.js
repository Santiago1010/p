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
      id_prueba: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas_test_pruebas',
          key: 'id_prueba',
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
          name: 'id_usuario_prueba_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_web_usuario' }, { name: 'id_prueba' }],
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
        {
          name: 'FK_test_resgeneral_test_general',
          using: 'BTREE',
          fields: [{ name: 'id_test' }],
        },
        {
          name: 'FK_test_resgeneral_pruebas',
          using: 'BTREE',
          fields: [{ name: 'id_prueba' }],
        },
      ],
    }
  );
};
