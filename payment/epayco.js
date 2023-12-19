const axios = require('axios');
const url = process.env.EPAYCO_URLAPI;
const urlResponse = 'https://www.thebiznation.com/redirect/comprar/orden?id=';

const authToken = async () => {
  try {
    const authorization = `Basic ${Buffer.from(
      `${process.env.EPAYCO_PUBLIC_KEY}:${process.env.EPAYCO_PRIVATE_KEY}`
    ).toString('base64')}`;
    const { data } = await axios.post(
      `${url}login`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authorization,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const efectivo = async (transaction) => {
  try {
    const { token, error } = await authToken();
    if (error) {
      console.log(error);
      return false;
    }

    const datos = {
      description: 'Compra de formulario de inscripción',
      value: transaction.valor_total,
      tax: 0,
      taxBase: 0,
      currency: 'COP',
      typePerson: transaction.peopleType === 'natural' ? 0 : 1,
      docType: transaction.documentType,
      docNumber: transaction.documentNumber.toString(),
      name: transaction.name,
      lastName: transaction.name,
      email: transaction.email,
      cellPhone: Number(transaction.movil),
      endDate: transaction.endDate,
      ip: transaction.ip,
      paymentMethod: transaction.bankCash,
      urlResponse: urlResponse,
      method_confirmation: 'GET',
      urlConfirmation: `${process.env.URLAPI}${process.env.URLCONFIRMATIONADMISION}`,
    };

    const { data } = await axios.post(`${url}/payment/process/cash`, datos, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const pse = async (transaction) => {
  try {
    const { token, error } = await authToken();
    if (error) {
      console.log(error);
      return false;
    }

    const datos = {
      description: transaction.description || 'Compra de formulario de inscripción',
      bank: transaction.bankPSE.toString(),
      value: transaction.valor_total.toString(),
      docType: transaction.documentType == -1 ? 'CC' : transaction.documentType.toString(),
      docNumber: transaction.documentNumber.toString(),
      name: transaction.name,
      lastName: transaction.name,
      email: transaction.email,
      cellPhone: transaction.movil.toString(),
      ip: transaction.ip.toString(),
      urlResponse: transaction.urlResponse || urlResponse,
      method_confirmation: 'GET',
      urlConfirmation: `${process.env.URLAPI}${transaction.urlConfirmation || process.env.URLCONFIRMATIONADMISION}`,
    };

    if (transaction.invoice) {
      datos.invoice = transaction.invoice;
    }

    const { data } = await axios.post(`${url}/payment/process/pse`, datos, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const tcredito = async (transaction) => {
  try {
    const { token, error } = await authToken();
    if (error) {
      console.log(error);
      return false;
    }

    const month = transaction.expirationDate.split('/')[0];
    const year = transaction.expirationDate.split('/')[1];

    const datos = {
      description: transaction.description || `Compra de formulario de inscripción #${transaction.id}`,
      value: transaction.valor_total.toString(),
      docType: transaction.documentType,
      docNumber: transaction.documentNumber.toString(),
      name: transaction.name,
      lastName: transaction.cardholderName,
      email: transaction.email,
      cellPhone: transaction.movil.toString(),
      phone: transaction.movil.toString(),
      cardNumber: transaction.cardNumber.replace(/ /g, ''),
      cardExpYear: `20${year}`,
      cardExpMonth: month,
      cardCvc: transaction.CVC,
      dues: transaction.fees,
      ip: transaction.ip,
      method_confirmation: 'GET',
      urlResponse: transaction.urlResponse || urlResponse,
      urlConfirmation: `${process.env.URLAPI}${transaction.urlConfirmation || process.env.URLCONFIRMATIONADMISION}`,
    };

    if (transaction.invoice) {
      datos.invoice = transaction.invoice;
    }

    const { data } = await axios.post(`${url}/payment/process`, datos, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  efectivo,
  pse,
  tcredito,
};
