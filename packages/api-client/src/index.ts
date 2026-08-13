import { ApiResponse } from '@hotel-platform/types';

export function createApiClientConfig(baseUrl: string) {
  return {
    baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export type { ApiResponse };
