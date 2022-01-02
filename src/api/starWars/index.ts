import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const starWarsApi = createApi({
	reducerPath: 'starWarsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
	endpoints: builder => ({
		getPeople: builder.query({
			query: (number: number) => `people/${number}`,
			
		}),
	}),
})

export const { useGetPeopleQuery } = starWarsApi
