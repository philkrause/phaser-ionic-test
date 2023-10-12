import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.clustergames.horsebets',
  appName: 'horsebets-app',
  webDir: '../../dist/apps/horsebets-app-react',
  server: {
    androidScheme: 'https'
  }
};

export default config;
