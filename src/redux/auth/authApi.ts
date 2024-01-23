import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: body => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation, useGetProductsQuery} =
  userApi;
// export const { endpoints, reducerPath, reducer, middleware } = userApi
