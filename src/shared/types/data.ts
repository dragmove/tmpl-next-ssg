import { UseQueryOptions } from '@tanstack/react-query';

export type ReactQueryOptions =
  | Omit<UseQueryOptions, 'queryKey' | 'queryFn'>
  | undefined;
