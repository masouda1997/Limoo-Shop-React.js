import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "configs/variable.config";

export const imageUploader = createApi({
   reducerPath :'apiUpload',
   baseQuery : fetchBaseQuery({baseUrl:"http://localhost:3002"}),
   endpoints : (builder)=>({
      tagTypes:["Img"],
      postImg:builder.mutation({
         query:(formData)=>({
            url:'/upload',
            method:"POST",
            body:formData,
         }),
         invalidatesTags:["img"]
      })
   })
})

export const {usePostImgMutation} = imageUploader

