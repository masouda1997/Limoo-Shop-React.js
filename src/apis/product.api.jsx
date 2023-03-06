import { httpService } from "services/http.service"

export const productApi = httpService.injectEndpoints({
   endpoints:(builder)=>({
      tagTypes:["product"],
      
      ProductData:builder.query({
         query:(page = 1 )=>`/products?_page=${page}&_limit=5`,
         // transformResponse(apiResponse, meta) {
         //    return { apiResponse, totalCount: Number(meta.response.headers.get('X-Total-Count')) }
         // }
         providesTags:["product"]
      }),
      productUpdate: builder.mutation({
         query:(data)=>({
            url:`/products/${data.id}`,
            method:"PATCH",
            body:data
         }),
         invalidatesTags:["product"]
         // here we can add more option
      }),
      productDelete:builder.mutation({
         query:({id})=>({
            url:`/products/${id}`,
            method:"DELETE",
            body:id
         }),
         invalidatesTags:["product"]
      }),
      productAdd:builder.mutation({
         query:(payload)=>({
            url:`/products`,
            method:"POST",
            body:payload,
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         }),
         invalidatesTags:["product"]
      })
   })
})

export const {
   useProductDataQuery ,
   useProductUpdateMutation,
   useProductDeleteMutation,
   useProductAddMutation,
} = productApi