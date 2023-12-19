const calcularValoresVenta = (producto) => {
  let valor_venta = 0,
    valor_bruto = 0,
    valor_impuesto = 0,
    // porcentaje_descuento = 0,
    valor_total = 0,
    valor_descuento = 0,
    valor_descuento_temp = 0,
    valor_iva = 0,
    valor_ipoconsumo = 0,
    porc_iva = 0,
    porc_ipconsumo = 0;

  //para el impuesto en venta el 1 significa iva, el 2 ipoconsumo, el 3 ninguno
  let tarifa_impuesto = 0;
  if (producto.impuesto_venta === 1) {
    if (producto.indicador_iva === 1) {
      if (producto.porcentaje_iva > 0) {
        tarifa_impuesto = producto.porcentaje_iva;
      }
    }
  } else if (producto.impuesto_venta === 2) {
    if (producto.indicador_impconsumo === 1) {
      if (producto.porcentaje_impconsumo > 0) {
        tarifa_impuesto = producto.porcentaje_impconsumo;
      }
    }
  }

  if (tarifa_impuesto !== -1) {
    valor_venta = producto.price * (producto.quantity || 1);
    valor_bruto = valor_venta;
    //si la tarifa_impuesto es = 0 es porque no va a manejar impuesto
    //if (tarifa_impuesto > 0) {
    //Si Impuesto en Venta Incluido En El Precio es = 1 es porque esta activo
    if (producto.impuesto_incluido) {
      valor_bruto = valor_bruto / (1 + tarifa_impuesto / 100);
      valor_bruto = Number(valor_bruto.toFixed(2));
    }

    if (producto.discount > 0) {
      valor_descuento = valor_bruto * (producto.discount / 100);
      valor_descuento = Number(valor_descuento.toFixed(0));

      ////////
      valor_descuento_temp = valor_venta * (producto.discount / 100) - valor_descuento;
      valor_descuento_temp = Number(valor_descuento_temp.toFixed(0));

      valor_bruto = valor_bruto - valor_descuento;
      valor_bruto = Number(valor_bruto.toFixed(2));
    }

    if (tarifa_impuesto > 0) {
      valor_impuesto = valor_bruto * (tarifa_impuesto / 100);
      valor_impuesto = Number(valor_impuesto.toFixed(0));
    }

    if (producto.impuesto_incluido) {
      valor_bruto = valor_venta - valor_descuento - valor_impuesto - valor_descuento_temp;
      valor_bruto = Number(valor_bruto.toFixed(2));
    }

    if (producto.impuesto_venta === 1) {
      valor_iva = valor_impuesto;
      porc_iva = tarifa_impuesto;
    } else if (producto.impuesto_venta === 2) {
      valor_ipoconsumo = valor_impuesto;
      porc_ipconsumo = tarifa_impuesto;
    }
    valor_total = valor_bruto + valor_impuesto;
    valor_total = Number(valor_total.toFixed(2));

    return {
      valor_venta: valor_venta,
      valor_impuesto: valor_impuesto,
      valor_bruto: valor_bruto,
      valor_descuento: valor_descuento,
      valor_iva: valor_iva,
      valor_ipoconsumo: valor_ipoconsumo,
      valor_total: valor_total,
      porc_iva: porc_iva,
      porc_descuento: producto.discount,
      porc_ipconsumo: porc_ipconsumo,
    };
  }
  return {};
};

module.exports = {
  calcularValoresVenta,
};
