const axios = require('axios');
const qs = require('qs');
const { ZOOM_OAUTH_AUTHORIZATION_URL, ZOOM_OAUTH_TOKEN_URL } = require('../../helpers/zoom/constants');
const { zoom } = require('../../config');
const { clientId, clientSecret, accountId, redirectUrl } = zoom;

class ZoomOAuth {
  static async requestOAuthToken(req, res, next) {
    const { code } = req.query;

    if (!code) {
      // Request authorization code in preparation for access token request
      return res.redirect(
        `${ZOOM_OAUTH_AUTHORIZATION_URL}?${qs.stringify({
          response_type: 'code',
          client_id: clientId,
          redirect_uri: redirectUrl,
        })}`
      );
    }

    try {
      // Request access token if authorization code is present
      const zoomAuthRequest = await axios.post(
        ZOOM_OAUTH_TOKEN_URL,
        qs.stringify({
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUrl,
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
          },
        }
      );
      const { access_token, refresh_token } = await zoomAuthRequest.data;
      req.zoomToken = { accessToken: access_token, refreshToken: refresh_token };
      return next();
    } catch (err) {
      return next(err);
    }
  }
  static async requestServerToServerToken(req, res, next) {
    try {
      // Request access token if authorization code is present
      const zoomAuthRequest = await axios.post(
        ZOOM_OAUTH_TOKEN_URL,
        qs.stringify({
          grant_type: 'account_credentials',
          account_id: accountId,
        }),
        {
          headers: {
            Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
          },
        }
      );
      const { access_token, refresh_token } = await zoomAuthRequest.data;
      req.zoomToken = { accessToken: access_token, refreshToken: refresh_token };
      return next();
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = ZoomOAuth;
