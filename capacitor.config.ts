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
      "apiKey": "AIzaSyD_H5cyWMb3pkmTyx_2Oz-Lm4tYoj5cu4k"

    },
    "Geolocation": {
      "forceShowDialog": true
    }

  }
};

export default config;
