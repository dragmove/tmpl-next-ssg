import { ReactQueryOptions } from '@shared/types/data';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { publicApi } from '../remote';

const getCareers = async () => {
  const response = await publicApi.get<UseQueryResult>(
    '/nop/data/careers.json',
  );
  return response.data;
};

export const useCareers = (
  queryOptions?: ReactQueryOptions,
): UseQueryResult => {
  return useQuery(['careers'], getCareers, queryOptions);
};
