// client/utilities/sdk.js
/* global FB gapi */

import config from '../../config/custom';

const injectScript = (d, s, id, src) => {
  if (d.getElementById(id)) { return; }
  const fjs = d.getElementsByTagName(s)[0];
  const js = d.createElement(s);
  js.id = id;
  js.src = src;
  fjs.parentNode.insertBefore(js, fjs);
};

export const facebookSDK = (cb) => {
  window.fbAsyncInit = function init() {
    FB.init(config.facebook.options);
    if (cb) cb();
  };

  injectScript(document, 'script', 'facebook-jssdk', config.facebook.url);
};

export const googleSDK = (cb) => {
  gapi.load('auth2', () => {
    const auth2 = gapi.auth2.init(config.google.options);
    if (cb) cb(auth2);
  });
};
