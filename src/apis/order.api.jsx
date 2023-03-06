import { httpService } from "services/http.service"

export const ordersApi= httpService.injectEndpoints({
   endpoints:(builder)=>({
      tegTypes:['orders'],
      OrdersData:builder.query({
         query:(deliverd)=>({
            url:`/orders?delivered=${deliverd}`,
            // &_page=${page}&_limit=5&
            method:'GET'
         }),
         providesTags:['orders']
         // keepUnusedDataFor:5,
      }),
      DeliveredOrdersData:builder.query({
         query:(delivery)=>({
            url:`/orders?delivered=${delivery}`,
            method:'GET'
         }),
         providesTags:['orders']
         // keepUnusedDataFor:5,
      }),
      AddNewOrder:builder.mutation({
         query:(payload)=>({
            url:`/orders`,
            method:"POST",
            body:payload,
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         }),
         invalidatesTags:["orders"]
      }),
      DeliveredOrders: builder.mutation({
         query:(data)=>({
            url:`/orders/${data.id}`,
            method:"PATCH",
            body:data
         }),
         invalidatesTags:["orders"]
         // here we can add more option
      }),
   }),
})

export const {
   useOrdersDataQuery , 
   useDeliveredOrdersDataQuery,
   useAddNewOrderMutation ,
   useDeliveredOrdersMutation,} = ordersApi



