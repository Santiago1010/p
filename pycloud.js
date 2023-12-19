const pcloud = require('pcloud-sdk-js');
const config = require('../config');
const access_token = config.pcloud.accessToken;
const typeRegularExpression = /\/(.*?)$/;
const fs = require('fs');

const customError = require('./customError');
const { webImagenesRutas } = require('./../database/config').sequelize.models;

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

const subirArchivoPcloudRuta = async (base64, categoriaRuta, uniqueIdentifier) => {
  const imagenesRutas = await webImagenesRutas.findOne({
    where: {
      tipoCategoria: categoriaRuta,
    },
  });

  if (!imagenesRutas) {
    throw customError(
      `No se encuentra configurada adecuadamente en base de datos ruta de imagenes para categoria ${categoriaRuta}`,
      500
    );
  }

  const rutaArchivo = imagenesRutas.url;
  const nombreArchivo = `${imagenesRutas.forma}-${uniqueIdentifier}`;
  const resultadoSubida = await subiArchivosPcloud(base64, rutaArchivo, nombreArchivo);

  if (!resultadoSubida) {
    throw customError('Error al subir imagen', 500);
  }

  const file = resultadoSubida.metadata.fileid;
  const folder = resultadoSubida.metadata.parentfolderid;
  const stringDB = `/bizdata/api/v1/home/archivo/${folder}/${file}`;

  return { rutaArchivo, nombreArchivo, fileId: file, folderId: folder, stringDB };
};

const bajarArchivosPcloud = async (folderid, fileid) => {
  const folderIdIsNumber = !Number.isNaN(Number(folderid));
  const fileIdIsNumber = !Number.isNaN(Number(folderid));

  if (!folderIdIsNumber || !fileIdIsNumber) {
    throw customError('folderid y fileid deben ser números', 400);
  }

  const folderId = parseInt(folderid);
  const fileId = parseInt(fileid);

  const clientPcloud = pcloud.createClient(access_token);
  let folderMetadata;

  try {
    folderMetadata = await clientPcloud.listfolder(folderId);
  } catch (error) {
    throw customError('No existe el directorio', 400);
  }

  const file = folderMetadata.contents.find((e) => e.fileid == fileId);

  if (!file) {
    throw customError('No existe el archivo', 400);
  }

  const downloadedFile = await clientPcloud.downloadfile(file.fileid, file.name);

  const archivo = fs.readFileSync(downloadedFile.path);
  fs.unlinkSync(downloadedFile.path);

  return { archivo, contentType: file.contenttype, length: file.size };
};

module.exports = { subiArchivosPcloud, decodeBase64, subirArchivoPcloudRuta, bajarArchivosPcloud };
