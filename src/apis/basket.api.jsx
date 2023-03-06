import { httpService} from "services/http.service";

export const basketApi = httpService.injectEndpoints({
	endpoints: (builder) => ({
		tagTypes: ["newOrder"],
		getOrders:builder.query({
			query:()=>`/orders`,
			// query:(id)=>`/orders?id=${id}`,
			providesTags: ["newOrder"]
		}),
		NewOrder: builder.mutation({
			query: (payload) => ({
				url: `/orders`,
				method: "POST",
				body: payload,
			}),
         invalidatesTags:["newOrder"]
		}),
		DeleteOrderCart:builder.mutation({
			query:({id}) => ({
				url:`/orders/${id}`,
				method:"DELETE",
				body:id
			}),
			invalidatesTags:["newOrder"]
		}),
		UpdateOrderCart:builder.mutation({
			query: ({ id, ...rest }) => ({
				url: `/tasks/${id}`,
				method: "PUT",
				body: rest
			}),
         invalidatesTags:["newOrder"]
		})
	}),
});


export const { 

	useGetOrdersQuery ,
	useNewOrderMutation  , 
	useDeleteOrderCartMutation,
	useUpdateOrderCartMutation,
} = basketApi