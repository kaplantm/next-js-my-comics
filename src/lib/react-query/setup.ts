/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { QueryClient } from 'react-query';

// Reference: https://react-query.tanstack.com/guides/default-query-function
// Define a default query function that will receive the query key
// the queryKey is guaranteed to be an Array here
export const defaultQueryFn = async ({ queryKey }) => {
  const { data } = await axios.get(queryKey[0]);
  return data;
};

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 120,
      staleTime: 1000 * 60 * 60,
      retry: false,
    },
  },
});
