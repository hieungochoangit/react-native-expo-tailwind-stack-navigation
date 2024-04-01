import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    // TODO: Handle token here

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);

  // TODO: Handle refresh token here

  return result;
};

const api = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'app-api',
  endpoints: () => ({}),
});

export default api;
