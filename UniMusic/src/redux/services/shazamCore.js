import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '30f5f8a0bemsh1c7098af25d9715p142ee4jsn19c4f9cfbeaf');
      return headers;
    },  
  }),
  endpoints: (builder) => ({
    getTopChrts: builder.query({ query: () => '/charts/track'}),
  }), 
});

export const {useGetTopChrtsQuery} = shazamCoreApi;