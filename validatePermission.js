const { permisosApiOpciones, permisosApiOpcionesUsuarios } = require('./../database/config').sequelize.models;
class ValidatePermission {
  static async validateRoute(url, method, idUsuario) {
    const urlWithId = await this.replaceParamsWithId(url);
    const urlToSearch = await this.replaceVersion(urlWithId);

    const tieneRestriccion = await permisosApiOpciones.findOne({
      attributes: ['idPermiso'],
      where: {
        urlApi: urlToSearch,
        metodo: method,
      },
      raw: true,
    });

    if (!tieneRestriccion) {
      return true;
    }

    const usuarioTienePermiso = await permisosApiOpcionesUsuarios.findOne({
      where: {
        idPermiso: tieneRestriccion.idPermiso,
        idUsuario,
      },
    });

    return usuarioTienePermiso ? true : false;
  }

  static async replaceParamsWithId(url) {
    const paramRegex = /\/(\d+)(?=\/|$)/g;
    const replacedUrl = url.replace(paramRegex, '/:id');

    return replacedUrl;
  }

  static replaceVersion(url) {
    const paramRegex = /^\/api\/v[0-1]\//;

    if (paramRegex.test(url)) {
      const replacedUrl = url.replace(paramRegex, '/');
      return replacedUrl;
    }

    return url;
  }
}

module.exports = ValidatePermission;
