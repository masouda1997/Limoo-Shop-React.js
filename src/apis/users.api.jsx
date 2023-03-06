import { httpService } from "services/http.service";

export const usersApi = httpService.injectEndpoints({
   endpoints:(builder)=>({
      tagTypes:['users'],
      GetSpecificUser:builder.query({
         query:(payload)=>({
            url:`/users?phone=${payload.phone}&name=${payload.name}`,
            method:"GET",
         }),
         providesTags:["users"]
      }),
      AddNewUser:builder.mutation({
         query:(payload)=>({
            url:`/users`,
            method:"POST",
            body:payload,
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         }),
         invalidatesTags:["users"]
      }),

   })
})

export const {useGetSpecificUserQuery,useAddNewUserMutation } = usersApi