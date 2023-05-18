import axios, { AxiosError } from 'axios';
import { FetchResponse, ReactQueryOptions } from '@/shared/types/data';
import {
  QueryClient,
  QueryFunction,
  QueryKey,
  useQuery,
} from '@tanstack/react-query';
import PHASE_CONFIG from '@/shared/env/phase';

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

export const fetchData = (
  queryKey: QueryKey,
  queryFn: QueryFunction<FetchResponse>,
  queryOptions?: ReactQueryOptions,
): FetchResponse => {
  const { isLoading, isFetching, data, error } = useQuery(
    queryKey,
    queryFn,
    queryOptions,
  );

  return {
    isLoading,
    isFetching,
    data,
    error,
  };
};
