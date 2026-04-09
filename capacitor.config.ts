import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cuisinedemaman.app',
  appName: 'Cuisine de Maman',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
