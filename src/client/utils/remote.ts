import PHASE_CONFIG from '@/shared/env/phase';
import { QueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

/**
 * axios setting
 */
export const publicApi = axios.create({
  baseURL: PHASE_CONFIG.API_DOMAIN,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

/*
// TODO: add interceptors setting (@see https://codevoweb.com/react-query-axios-crud-restful-api-application/)
// add auth api, set axios interceptor
export const authApi = axios.create({
  baseURL: PHASE_CONFIG.API_DOMAIN,
  withCredentials: true,
});
*/

/**
 * react-query setting
 */
const queryErrorHandler = (error: unknown) => {
  console.log('::queryErrorHandler:: error :', (error as AxiosError)?.message);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,

      onError: queryErrorHandler,
    },
    // TODO: set options for mutation
  },
});
