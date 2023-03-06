
import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";



export const imageUploader = createApi({
   reducerPath:"api",
   baseQuery:fetchBaseQuery({
      // baseQuery:"http"
   })
	endpoints: (builder) => ({
		tagTypes: ["img"],
		getOrders:builder.query({
			query:(formData)=>({
            url:'/upload'

         }),
			providesTags: ["img"]
		}),
   }),
});


export const {} = imageUploader