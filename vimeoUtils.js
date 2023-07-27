const { Vimeo } = require('vimeo');
const config = require('../config');
const { clientId, clientSecret, accessToken } = config.vimeo;
const client = new Vimeo(clientId, clientSecret, accessToken);

class VimeoUtils {
  static async getVideo(idVideo, { fields } = {}) {
    // Ejemplo de fields = 'duration'
    const dataVideo = await new Promise((resolve, reject) => {
      client.request(
        {
          method: 'GET',
          path: `/videos/${idVideo}${fields ? `?fields=${fields}` : ''}`,
        },
        (error, body) => {
          if (error) {
            reject(error);
          }
          resolve(body);
        }
      );
    });
    return dataVideo;
  }
}

module.exports = VimeoUtils;
