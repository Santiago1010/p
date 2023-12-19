const { webImagenesRutas } = require('../database/config').sequelize.models;
const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');

const config = require('../config');
const customError = require('./customError');

const s3Client = new S3Client({
  region: config.s3.region,
});

class AwsS3 {
  static async getObject(key) {
    const params = {
      Bucket: config.s3.bucket,
      Key: key,
    };
    const command = new GetObjectCommand(params);
    const response = await s3Client.send(command);
    return response;
  }

  static async uploadFromBase64(dataString, filePath) {
    const matches = dataString.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    if (!matches || matches?.length !== 3) {
      throw new Error('Invalid base64');
    }
    const type = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');

    const command = new PutObjectCommand({
      Bucket: config.s3.bucket,
      Key: filePath,
      Body: buffer,
      ContentType: type,
    });

    const response = await s3Client.send(command);
    return response;
  }

  static async uploadFromFileBuffer(fileBuffer, fileType, filePath) {
    const command = new PutObjectCommand({
      Bucket: config.s3.bucket,
      Key: filePath,
      Body: fileBuffer,
      ContentType: fileType,
    });

    const response = await s3Client.send(command);
    return response;
  }

  static async uploadBufferFileRoute(fileBuffer, fileType, categoryRoute, uniqueIdentifier) {
    const imagenesRutas = await webImagenesRutas.findOne({
      where: {
        tipoCategoria: categoryRoute,
      },
    });

    if (!imagenesRutas) {
      throw customError(
        `No se encuentra configurada adecuadamente en base de datos ruta de imagenes para categoria ${categoryRoute}`,
        500
      );
    }

    const rutaArchivo = imagenesRutas.url;
    const nombreArchivo = `${rutaArchivo}/${imagenesRutas.forma}-${uniqueIdentifier}`;
    const resultadoSubida = await AwsS3.uploadFromFileBuffer(fileBuffer, fileType, nombreArchivo);

    if (!resultadoSubida) {
      throw customError('Error al subir imagen', 500);
    }

    const buffer = Buffer.from(nombreArchivo, 'utf-8');
    const base64URL = buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    const stringDB = `/api/v1/archivos/${base64URL}`;

    return { rutaArchivo, nombreArchivo, stringDB };
  }

  static async uploadBase64Route(base64, categoryRoute, uniqueIdentifier) {
    const imagenesRutas = await webImagenesRutas.findOne({
      where: {
        tipoCategoria: categoryRoute,
      },
    });

    if (!imagenesRutas) {
      throw customError(
        `No se encuentra configurada adecuadamente en base de datos ruta de imagenes para categoria ${categoryRoute}`,
        500
      );
    }

    const rutaArchivo = imagenesRutas.url;
    const nombreArchivo = `${rutaArchivo}/${imagenesRutas.forma}-${uniqueIdentifier}`;
    const resultadoSubida = await AwsS3.uploadFromBase64(base64, nombreArchivo);

    if (!resultadoSubida) {
      throw customError('Error al subir imagen', 500);
    }

    const buffer = Buffer.from(nombreArchivo, 'utf-8');
    const base64URL = buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

    const stringDB = `/api/v1/archivos/${base64URL}`;

    return { rutaArchivo, nombreArchivo, stringDB };
  }
}

module.exports = AwsS3;
