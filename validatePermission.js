const { permisosApiOpciones, permisosApiOpcionesUsuarios } = require('./../database/config').sequelize.models;
class ValidatePermission {
  static async validateRoute(url, method, idUsuario) {
    const urlWithId = this.replaceParamsWithId(url);
    const urlWithoutQueryParams = this.deleteQueryParams(urlWithId);

    // Elimina ul slash / si queda al final de los reemplazos anteriores y despues de reemplazar la version
    const urlToSearch = this.replaceVersion(urlWithoutQueryParams).replace(/\/$/, '');

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

  static replaceParamsWithId(url) {
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

  static deleteQueryParams(url) {
    const paramRegex = /\?.*$/;
    const replacedUrl = url.replace(paramRegex, '');

    return replacedUrl;
  }
}

module.exports = ValidatePermission;
