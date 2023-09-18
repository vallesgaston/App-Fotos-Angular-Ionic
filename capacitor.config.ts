import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.GastonValles.app',
  appName: 'fotos-app',
  webDir: 'dist/fotos-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
