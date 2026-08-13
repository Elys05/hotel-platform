import axios from 'axios';
import Constants from 'expo-constants';

const extraApiUrl = Constants.expoConfig?.extra?.apiUrl;

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || extraApiUrl || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
