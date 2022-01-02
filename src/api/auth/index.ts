import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from 'src/stores'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dev-m-rms.wndv.co/',
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const accessToken = (getState() as RootState).authSlice.accessToken
			if(accessToken) {
			  headers.set('Authorization', `Bearer ${accessToken}`)
			}
			return headers
		  }
	}),
	endpoints: builder => ({
		login: builder.mutation({
			query: credentials => ({
				url: 'auth/login',
				method: 'POST',
				body: credentials
			}),
		}),
		logout: builder.mutation({
			query: credentials => ({
				url: 'auth/logout',
				method: 'POST',
				body: credentials
			}),
		})
	}),
})

export const { useLoginMutation, useLogoutMutation } = authApi
