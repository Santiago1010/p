const Bottleneck = require('bottleneck');

class BottleneckUtils {
  static async createCallLimiter(totalCalls, totalMiliseconds) {
    const callLimiter = new Bottleneck({
      reservoir: totalCalls, // initial value
      reservoirRefreshAmount: totalCalls,
      reservoirRefreshInterval: totalMiliseconds,
      maxConcurrent: 10, // Número de solicitudes concurrentes
      minTime: totalMiliseconds / totalCalls, // Tiempo mínimo de espera en ms para 500 peticiones por minuto
    });

    return callLimiter;
  }

  static async scheduleCall(callLimiter, funtionToCall) {
    return await callLimiter.schedule(funtionToCall);
  }
}

module.exports = BottleneckUtils;
