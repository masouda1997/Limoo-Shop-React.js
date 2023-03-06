import { httpService } from "services/http.service";

export const singleProductApi = httpService.injectEndpoints({
   endpoints:(builder)=>({
      tagType:["singleProduct"],
      
      AllProductData:builder.query({
         query:()=>`/products`,
         providesTags:["singleProduct"]
      }),
      filteredProduct : builder.query({
         query:(id)=>`/products?id=${id}`,
         providesTags:["singleProduct"]
      })
   })
})

export const {
   useAllProductDataQuery,
   useFilteredProductQuery,
} = singleProductApi