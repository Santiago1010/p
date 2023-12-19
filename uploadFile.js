const pcloud = require('pcloud-sdk-js');
const access_token = 'E1vu7ZwtyGBVjzBFYZXbNec7ZsHa0Kwwell0JHSrGcvXL9fPUvk27';
const fs = require('fs');
const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

const subiArchivosPcloud = async (file, rutaDestino) => {
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
        resolve(err);
      });
  });
  return r;
};

const bajarArchivosPcloud = async (folderid, fileid) => {
  console.log(folderid, fileid);
  const clientPcloud = pcloud.createClient(access_token);
  const r = new Promise((resolve, reject) => {
    clientPcloud.listfolder(Number(folderid)).then((fileMetadata) => {
      console.log(fileMetadata.contents);
      const file = fileMetadata.contents.find((e) => e.fileid == fileid);
      clientPcloud
        .downloadfile(file.fileid, file.name, {
          onBegin: () => console.log('begin'),
          onProgress: ({ loaded, total }) => {
            const porcentaje = ((loaded / total) * 100).toFixed(2);
            console.log(file, loaded, total, porcentaje + '%');
          },
        })
        .then((result) => {
          const data = fs.readFileSync(file.name);
          fs.unlinkSync(file.name);
          resolve({
            archivo: data,
            contenttype: file.contenttype,
          });
        })
        .catch((err) => {
          resolve({
            err: err,
          });
        });
    });
  });
  return r;
};

const listarArchivoPcloud = async (rutaDestino, archivo) => {
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
    clientPcloud.listfolder(folderid[folderid.length - 1]).then((fileMetadata) => {
      let fil = {};
      fileMetadata.contents.forEach((files) => {
        if (files.name === archivo) {
          fil = files;
        }
      });
      resolve(fil);
    });
  });
  return r;
};

module.exports = { groupBy, subiArchivosPcloud, bajarArchivosPcloud, listarArchivoPcloud };
