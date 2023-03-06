import { httpService } from "services/http.service";

export const categoryApi = httpService.injectEndpoints({
   endpoints:(builder)=>({
      tagType:["category"],
      
      AllCategory:builder.query({
         query:()=>`/category`,
         providesTags:["category"]
      }),
   })
})

export const {
   useAllCategoryQuery,
} = categoryApi