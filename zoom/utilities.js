const axios = require('axios');
const qs = require('qs');
const { decrypt } = require('./crypto');

const { ZOOM_OAUTH_TOKEN_URL, ZOOM_OAUTH_REVOKE_TOKEN_URL, ZOOM_API_BASE_URL } = require('./constants');

const { zoom } = require('../../config');
const { clientId, clientSecret } = zoom;

class ZoomUtils {
  static async refreshOauthToken({ old_refresh_token }) {
    try {
      const zoomRefreshTokenRequest = await axios.post(
        ZOOM_OAUTH_TOKEN_URL,
        qs.stringify({
          grant_type: 'refresh_token',
          refresh_token: decrypt(old_refresh_token),
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
          },
        }
      );

      const { data } = await zoomRefreshTokenRequest;
      const { access_token, refresh_token } = data;

      return { access_token, refresh_token };
    } catch (error) {
      throw new Error(error);
    }
  }

  static async revokeOauthToken({ access_token }) {
    try {
      const revokeTokenResponse = await axios.post(
        ZOOM_OAUTH_REVOKE_TOKEN_URL,
        qs.stringify({
          token: decrypt(access_token),
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
          },
        }
      );

      const { data } = await revokeTokenResponse;

      return { data };
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getAsistenciaEvento(idEventoZoom, accessToken) {
    const getZoom = await axios.get(`${ZOOM_API_BASE_URL}/past_meetings/${idEventoZoom}/participants?page_size=300`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const zoomData = await getZoom?.data;
    let asistencias = zoomData?.participants?.reduce((accumulator, participant) => {
      const { name, duration, user_email } = participant;
      if (!accumulator[name]) {
        accumulator[name] = {
          name: name,
          email: user_email,
          totalDuration: duration,
        };
      } else {
        accumulator[name].totalDuration += duration;
      }
      return accumulator;
    }, {});

    asistencias = Object.values(asistencias);

    return asistencias;
  }
}

module.exports = ZoomUtils;
