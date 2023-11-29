const CryptoJS = require('crypto-js');
const axios = require('axios');
const fs = require('fs');
const nodemailer = require('nodemailer');
const { sequelize } = require('../database/config');
const initModels = require('../models/db/init-models');
const { adm_email_plantillas, adm_email_plantillas_resp, usuarios, notificaciones, notificaciones_users } =
  initModels(sequelize);

const config = require('../config');
const nodeMailerConfig = config.nodeMailer;

const CryptoJSAesJson = {
  stringify: function (cipherParams) {
    let j = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) };
    if (cipherParams.iv) j.iv = cipherParams.iv.toString();
    if (cipherParams.salt) j.s = cipherParams.salt.toString();
    return JSON.stringify(j);
  },
  parse: function (jsonStr) {
    let j = JSON.parse(jsonStr);
    let cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: CryptoJS.enc.Base64.parse(j.ct) });
    if (j.iv) cipherParams.iv = CryptoJS.enc.Hex.parse(j.iv);
    if (j.s) cipherParams.salt = CryptoJS.enc.Hex.parse(j.s);
    return cipherParams;
  },
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

const decodeCryptoJs = (encrypted, key) => {
  try {
    return JSON.parse(CryptoJS.AES.decrypt(encrypted, key, { format: CryptoJSAesJson }).toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log(error);
    return false;
  }
};

const number = {
  separador: ',', // separador para los miles
  sepDecimal: '.', // separador para los decimales
  formatear: (num) => {
    num += '';
    let splitStr = num.split('.'),
      splitLeft = splitStr[0],
      splitRight = splitStr.length > 1 ? number.sepDecimal + splitStr[1] : '',
      regx = /(\d+)(\d{3})/;
    while (regx.test(splitLeft)) {
      splitLeft = splitLeft.replace(regx, '$1' + number.separador + '$2');
    }
    return splitLeft + splitRight;
  },
  format: (num, simbol) => {
    return number.formatear(num);
  },
};

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

const notificacionPush = async (notificacion) => {
  const restKey = 'MDMxZTEwYTUtZTZjMS00NzE1LWE2ZDEtNjlkNTJlNzBkMDgz';
  const appID = 'ce4cefdd-1970-4348-ae71-4dd6344a2a0c';
  try {
    const { data } = await axios.post(
      `https://onesignal.com/api/v1/notifications`,
      {
        app_id: appID,
        contents: {
          en: notificacion.descripcion,
        },
        headings: {
          en: notificacion.titulo,
        },
        included_segments: ['Active Users'],
        filters: notificacion.filters,
        data: {
          id: notificacion.id,
        },
      },
      {
        headers: {
          'authorization': 'Basic ' + restKey,
          'content-type': 'application/json',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const notificacionSMS = async (notificacion) => {
  const account = '10025225';
  const apiKey = '0HOWsLrXKwQhylcFjBftMaoPnpIQhd';
  const token = '35306777d732fcaa5a26e436a5915e6e';
  try {
    const { data } = await axios.post(
      `https://api103.hablame.co/api/sms/v3/send/marketing`,
      {
        toNumber: '57' + notificacion.celular,
        sms: notificacion.descripcion,
        flash: 0,
        sc: '899775',
        request_dlvr_rcpt: 0,
        sendDate: '',
      },
      {
        headers: {
          'account': account,
          'apiKey': apiKey,
          'token': token,
          'content-type': 'application/json',
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const notificacionEmail = async (notificacion, plantilla, datos) => {
  if (plantilla) {
    const email_plantillas = await adm_email_plantillas.findOne({
      where: { tipo: plantilla },
      include: [
        {
          model: adm_email_plantillas_resp,
          as: 'adm_email_plantillas_resps',
          required: false,
          include: [
            {
              model: usuarios,
              as: 'id_usuario_usuario',
              required: false,
            },
          ],
        },
        {
          model: adm_email_plantillas,
          as: 'id_plantilla_resp_adm_email_plantilla',
          required: false,
          include: [
            {
              model: adm_email_plantillas_resp,
              as: 'adm_email_plantillas_resps',
              required: false,
              include: [
                {
                  model: usuarios,
                  as: 'id_usuario_usuario',
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    });
    if (email_plantillas) {
      const plantilla = JSON.parse(JSON.stringify(email_plantillas));
      plantilla.resp_plantilla = plantilla?.id_plantilla_resp_adm_email_plantilla || null;
      delete plantilla.id_plantilla_resp_adm_email_plantilla;

      for (const key in datos) {
        if (Object.hasOwnProperty.call(datos, key)) {
          const value = datos[key];
          plantilla.header = plantilla.header.replace('{' + key + '}', value);
          plantilla.mensaje = plantilla.mensaje.replace('{' + key + '}', value);
          plantilla.mensaje2 = plantilla.mensaje2.replace('{' + key + '}', value);
          plantilla.footer = plantilla.footer.replace('{' + key + '}', value);
          if (plantilla.resp_plantilla) {
            plantilla.resp_plantilla.header = plantilla.resp_plantilla.header.replace('{' + key + '}', value);
            plantilla.resp_plantilla.mensaje = plantilla.resp_plantilla.mensaje.replace('{' + key + '}', value);
            plantilla.resp_plantilla.mensaje2 = plantilla.resp_plantilla.mensaje2.replace('{' + key + '}', value);
            plantilla.resp_plantilla.footer = plantilla.resp_plantilla.footer.replace('{' + key + '}', value);
          }
        }
      }

      notificacion.email = datos.correos || datos.correo || datos.email;
      notificacion.asunto = plantilla.asunto;
      notificacion.html = plantilla.header + plantilla.mensaje + plantilla.footer;

      if (plantilla.resp_plantilla) {
        const arrayEmail = [];
        plantilla.resp_plantilla.adm_email_plantillas_resps.forEach((resp) => {
          const grados = resp?.grados || '';
          const email =
            resp.id_usuario_usuario.correos || resp.id_usuario_usuario.correo || resp.id_usuario_usuario.email;
          if ((!grados || grados.indexOf(datos.id_grado) >= 0) && email) {
            arrayEmail.push(email);
          }
        });
        if (arrayEmail.length) {
          notificacion.resp = {
            email: arrayEmail.toString(),
            asunto: plantilla.resp_plantilla.asunto,
            html: plantilla.resp_plantilla.header + plantilla.resp_plantilla.mensaje + plantilla.resp_plantilla.footer,
          };
        }
      }

      notificacion.asunto2 = plantilla.asunto2;

      if (email_plantillas?.adm_email_plantillas_resps?.length) {
        if (notificacion.asunto2) {
          const notificame = await notificaciones.create({
            titulo: notificacion.asunto2,
            total_usuarios: email_plantillas.adm_email_plantillas_resps.length,
            tipo: 'push',
            url: plantilla.url || '',
            descripcion: plantilla.mensaje2,
          });

          const usuarios = [];
          email_plantillas.adm_email_plantillas_resps.forEach((user) => {
            const grados = user?.grados || '';
            if (!grados || grados.indexOf(datos.id_grado) >= 0) {
              usuarios.push({ id_notificacion: notificame.id, id_user: user.id_usuario });
            }
          });
          await notificaciones_users.bulkCreate(usuarios);
        }
      }
    }
  }

  if (notificacion?.html) {
    const transporter = nodemailer.createTransport({
      host: nodeMailerConfig.host,
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: nodeMailerConfig.user,
        pass: nodeMailerConfig.password,
      },
    });

    const mailOptions = {
      from: nodeMailerConfig.from, // sender address
      to: notificacion.email,
      cc: 'tecnologiacis034@gmail.com',
      subject: notificacion.asunto,
      html: notificacion.html,
    };

    if (notificacion.headers) {
      mailOptions.headers = notificacion.headers;
    }

    if (notificacion.replyTo) {
      mailOptions.replyTo = notificacion.replyTo;
    }

    if (notificacion?.resp?.email) {
      const mailOptionsResp = {
        from: nodeMailerConfig.from, // sender address
        to: notificacion.resp.email,
        cc: 'tecnologiacis034@gmail.com',
        subject: notificacion.resp.asunto,
        html: notificacion.resp.html,
      };
      transporter.sendMail(mailOptionsResp, (error, info) => {
        if (error) {
          console.log(error);
          return { error: true }; //resolve({ error: true });
        } else {
          return info; //resolve(info);
        }
      });
    }

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          resolve({ error: true });
        } else {
          resolve(info);
        }
      });
    });
  }
  return null;
};

const saveFile = (base64, folder, documento, type = 'png') => {
  return new Promise((resolve, reject) => {
    const a = base64;
    const m = a.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    const b = Buffer.from(m[2], 'base64');

    // const folder = 'public/files/upload/proveedores';
    const url = `${folder}/${documento}`;

    const save = (url) => {
      fs.writeFile(`${url}`, b, (err) => {
        if (!err) {
          resolve(true);
        } else {
          reject(err);
        }
      });
    };

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
      save(url);
    } else {
      save(url);
    }
  });
};

const comparacionArreglos = (elementosActuales, elementosNuevos) => {
  const elementosCrear = [];
  const elementosEliminar = [];

  // Verificar los nuevos elementos que deben agregarse
  elementosNuevos.forEach((elementoNuevo) => {
    if (!elementosActuales.includes(elementoNuevo)) {
      elementosCrear.push(elementoNuevo);
    }
  });

  // Verificar los elementos que deben eliminarse
  elementosActuales.forEach((elementoActual) => {
    if (!elementosNuevos.includes(elementoActual)) {
      elementosEliminar.push(elementoActual);
    }
  });

  return { elementosCrear, elementosEliminar };
};

const eliminarElementosRepetidosArray = (array) => {
  const arrayLimpio = Array.from(new Set(array));
  return [...arrayLimpio];
};

module.exports = {
  decodeBase64,
  decodeCryptoJs,
  number,
  notificacionPush,
  notificacionSMS,
  notificacionEmail,
  groupBy,
  saveFile,
  comparacionArreglos,
  eliminarElementosRepetidosArray,
};
