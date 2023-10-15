import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'App_VidaSana',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "@capacitor-community/google-maps": {
      "apiKey": "AIzaSyBQGwKaF5rGQ1V-2b1930ljhjx_4ZUqLgM"

    },
    "Geolocation": {
      "forceShowDialog": true
    }

  }
};

export default config;
