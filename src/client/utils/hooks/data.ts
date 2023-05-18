import { FetchResponse, ReactQueryOptions } from '@shared/types/data';
import { fetchData, publicApi } from '../remote';

const getCareers = async () => {
  const response = await publicApi.get<FetchResponse>('/nop/data/careers.json');
  return response.data;
};

export const useCareers = (queryOptions?: ReactQueryOptions): FetchResponse => {
  return fetchData(['careers'], getCareers, queryOptions);
};
