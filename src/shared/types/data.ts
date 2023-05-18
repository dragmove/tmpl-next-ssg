import { UseQueryOptions } from '@tanstack/react-query';

export interface FetchResponse {
  data: any;
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
}

export type ReactQueryOptions = Omit<UseQueryOptions, 'queryKey'>;
