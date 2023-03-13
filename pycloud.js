const pcloud = require('pcloud-sdk-js');
const access_token = 'E1vu7ZwtyGBVjzBFYZXbNec7ZsHa0Kwwell0JHSrGcvXL9fPUvk27';
const typeRegularExpression = /\/(.*?)$/;
const fs = require('fs');

const subiArchivosPcloud = async (base64, rutaDestino, nombreArchivo) => {
  const fileBase = decodeBase64(base64);
  if (fileBase) {
    const ext = fileBase.type.match(typeRegularExpression);
    const file = `${nombreArchivo}.${ext[1]}`;
    fs.writeFileSync(file, fileBase.data);
    const clientPcloud = pcloud.createClient(access_token);
    const directorios = rutaDestino.split('/');
    const folderid = [];
    for (let index = 0; index < directorios.length; index++) {
      const carpeta = directorios[index];
      if (!index) {
        const busqueda = () =>
          new Promise((resolve, reject) => {
            clientPcloud.listfolder(0).then((fileMetadata) => {
              fileMetadata.contents.forEach((files) => {
                if (files.name === carpeta) {
                  folderid[index] = files.folderid;
                }
              });
              resolve(true);
            });
          });
        await busqueda();
      } else {
        const busqueda = () =>
          new Promise((resolve, reject) => {
            clientPcloud.listfolder(folderid[index - 1]).then((fileMetadata) => {
              fileMetadata.contents.forEach((files) => {
                if (files.name === carpeta) {
                  folderid[index] = files.folderid;
                }
              });
              resolve(true);
            });
          });
        await busqueda();
      }
    }
    const r = new Promise((resolve, reject) => {
      clientPcloud
        .upload(file, folderid[folderid.length - 1], {
          onBegin: () => console.log('begin'),
          onProgress: ({ loaded, total }) => {
            const porcentaje = ((loaded / total) * 100).toFixed(2);
            console.log(file, loaded, total, porcentaje + '%');
          },
        })
        .then((result) => {
          fs.unlinkSync(file);
          resolve(result);
        })
        .catch((err) => {
          fs.unlinkSync(file);
          resolve(err);
        });
    });
    return r;
  } else {
    return {
      status: false,
      msg: 'Base 64 no encontrado',
    };
  }
};

const decodeBase64 = (dataString) => {
  try {
    const matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    const response = {};
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
    return response;
  } catch (error) {
    return false;
  }
};
module.exports = { subiArchivosPcloud, decodeBase64 };
