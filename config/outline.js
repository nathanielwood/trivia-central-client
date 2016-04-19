export default {
  devServer: {
    port: 3000, // port the dev server will listen to
  },
  api: {
    url: 'http://localhost:8080', // url of the api server
  },
  facebook: {
    options: {
      appId: '1234567890', // Facebook application ID
      version: 'v2.5', // Graph API version to use
      status: true, // retrieves status which will be cached for .getLoginStatus()
      cookie: true, // creates cookie for session
      xfbml: false, // parses XFBML tags
    },
    url: '//connect.facebook.net/en_US/sdk.js', // sdk script that will be injected
  },
  google: {
    options: {
      client_id: '1234567890.apps.googleusercontent.com', // client ID provided by Google
    },
  },
};
