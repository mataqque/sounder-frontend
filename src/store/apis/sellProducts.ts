import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL_BASE_API_BACKEND } from '../config';

// Define a service using a base URL and expected endpoints
export const soundApi = createApi({
	reducerPath: 'soundApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/api',
	}),
	endpoints: builder => ({
		getSounds: builder.mutation({
			query: ({ data }) => {
				return {
					url: `/checkout/sellproduct`,
					method: 'POST',
					body: data,
				};
			},
		}),
	}),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSoundsMutation } = soundApi;
