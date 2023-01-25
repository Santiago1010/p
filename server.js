const express = require('express');
const cors = require('cors');
const notificaciones = require('../controllers/dashboard/notificaciones/index');
const swaggerUI = require('swagger-ui-express');
const docs = require('../docs');

class Server {
  constructor() {
    this.app = express();

    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(docs));
    this.port = process.env.PORT;

    // middlewares
    this.middlewares();

    this.routes();

    notificaciones.init();
    notificaciones.initDisparadores();
  }

  middlewares() {
    // cors
    this.app.use(cors());
    this.app.options('*', cors());

    // lectura y parseo del body
    this.app.use(express.json({ limit: '150mb' }));
    this.app.use(express.urlencoded({ limit: '150mb', extended: true }));

    // Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    require('../routes/index')(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }
}

module.exports = Server;
