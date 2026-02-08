// =============================================
// ELAND Mobile — API Configuration
// =============================================

import { Platform } from 'react-native';
import Constants from 'expo-constants';

// Physical device → компьютерийн LAN IP, Emulator → тусгай хаяг
const getBaseUrl = () => {
  if (__DEV__) {
    // Expo Go дээр debuggerHost-оос IP авах
    const debuggerHost = Constants.expoConfig?.hostUri?.split(':')[0];
    if (debuggerHost) {
      return `http://${debuggerHost}`;
    }
    return Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';
  }
  return 'https://api.eland.mn';
};

const BASE = getBaseUrl();

export const API_CONFIG = {
  auth: `${BASE}:3001/api/v1`,
  property: `${BASE}:3002/api/v1`,
  contract: `${BASE}:3003/api/v1`,
  auction: `${BASE}:3004/api/v1`,
  payment: `${BASE}:3005/api/v1`,
  ws: {
    auction: `${BASE}:3004`,
  },
};

export const APP_CONFIG = {
  name: 'ELAND',
  version: '1.0.0',
  defaultCurrency: '₮',
  defaultCity: 'Улаанбаатар',
  pageSize: 20,
  imageMaxSize: 10 * 1024 * 1024, // 10MB
  maxImages: 20,
};
