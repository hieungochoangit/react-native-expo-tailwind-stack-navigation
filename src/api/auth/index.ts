import { LoginRequest, LoginResponse } from './type';
import api from '..';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
