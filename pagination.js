const error = require('./customError');
class Paginate {
  static async paginateModel(model, limit, page, { attributes, where, order, include, paranoid } = {}) {
    const pageQuery = page - 1;
    const offset = page && limit ? pageQuery * limit : 0;
    const limitQuery = limit ? parseInt(limit) : undefined;

    if (page && !limit) {
      throw error('Si se envia page, tambien se debe enviar limit', 400);
    }

    const optionQuery = {
      offset,
      limit: limitQuery,
      attributes,
      where,
      order,
      include,
      paranoid,
    };

    const { rows: results, count } = await model.findAndCountAll(optionQuery);

    const limitAndPage = page && limit;

    const existPrev = limitAndPage ? page > 1 && offset < count : null;
    const existNext = limitAndPage ? Math.floor(count / limit) > page : null;

    return { total: count, results, existPrev, existNext, page };
  }

  static async paginateReqs(existNext, existPrev, page, req) {
    const pagina = parseInt(page);
    const prev = existPrev ? `${req.protocol}://${req.get('host')}${req.baseUrl}?page=${pagina - 1}` : null;
    const next = existNext ? `${req.protocol}://${req.get('host')}${req.baseUrl}?page=${pagina + 1}` : null;
    return { prevPage: prev, nextPage: next };
  }
}

module.exports = Paginate;
