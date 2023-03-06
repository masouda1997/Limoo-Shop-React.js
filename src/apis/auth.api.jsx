import { httpService } from "services/http.service";

export const authApiSlice = httpService.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials, page = 1) => ({
				url: `/products?_page=${page}&_limit=5`,
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});


export const authApi = httpService.injectEndpoints({
	endpoints:(builder)=>({
		GetAdmins:builder.query({
			query:()=>'/admins'
		})
	})
})

export const { useLoginMutation } = authApiSlice;
export const { useGetAdminsQuery } = authApi;