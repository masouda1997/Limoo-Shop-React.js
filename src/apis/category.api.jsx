import { httpService } from "services/http.service"
export const CategoryApi = httpService.injectEndpoints({
   endpoints:(builder)=>({
      tagTypes:["category"],
      
      CategoryData:builder.query({
         query:()=>`/category`,
         providesTags:["category"]
      }),
      filteredCategoryData :builder.query({
         query:(id)=>`/category?id=${id}`,
         providesTags:["category"]
      })
      
   })
})

export const {
   useCategoryDataQuery ,
   useFilteredCategoryDataQuery,
} = CategoryApi