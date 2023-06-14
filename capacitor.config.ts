import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'tech.kulotsystems.ron',
    appName: 'ron',
    webDir: 'dist',
    server: {
        androidScheme: 'https'
    }
};

export default config;
