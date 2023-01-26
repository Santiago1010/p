const express = require('express');
const cors = require('cors');
// Comentado notificaciones
// const notificaciones = require('../controllers/dashboard/notificaciones/index');

class Server {
  constructor() {
    console.time('iniciar-app');
    this.app = express();

    this.port = process.env.PORT;

    // middlewares
    this.middlewares();

    this.routes();
    // Comentada notificaciones
    // notificaciones.init();
    // notificaciones.initDisparadores();
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
    require('../routes')(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
      console.timeEnd('iniciar-app');
    });
  }
}

module.exports = Server;
