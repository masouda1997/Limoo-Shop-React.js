import{createApi , fetchBaseQuery}from '@reduxjs/toolkit/query/react'
import {API_BASE_URL} from 'configs/variable.config'
import { useParams } from 'react-router-dom'
// ///////////////////////////////////////////////////
// import { logOut, setCredentials } from "../../features/auth/authSlice";
// import { BASE_URL, REFRESH_TOKEN_URL } from "./constants";


export const httpService = createApi({
   reducerPath : 'httpServices',//not very important
   baseQuery : fetchBaseQuery({baseUrl:API_BASE_URL}),
   // credentials: "same-origin",
   // prepareHeaders: (headers, { getState, endpoint }) => {
   //    const token = localStorage.getItem("token");
   //    if (endpoint === REFRESH_TOKEN_URL) {
   //      const token = localStorage.getItem("refreshToken");
   //      headers.set("refreshToken", token);
   //    } else if (token) {
   //      headers.set("token", token);
   //    }
   //    return headers;
   //  },
   endpoints:(builder)=>({})
})

// const baseQueryWithReauth = async (args, api, extraOptions) => {
// 	let result = await baseQuery(args, api, extraOptions);
// 	if (result?.error?.originalStatus === 401) {
// 		console.log("sending refresh token");
// 		// send refresh token to get new access token
// 		const refreshResult = await baseQuery(
// 			{ url: REFRESH_TOKEN_URL, method: "POST" },
// 			{ ...api, endpoint: REFRESH_TOKEN_URL },
// 			extraOptions
// 		);
// 		console.log(refreshResult);
// 		if (refreshResult?.data) {
// 			// store the new token
// 			api.dispatch(setCredentials({ ...refreshResult.data }));
// 			// retry the original query with new access token
// 			result = await baseQuery(args, api, extraOptions);
// 		} else {
// 			api.dispatch(logOut());
// 		}
// 	}
// 	return result;
// };


export const {
   useGetAdminQuery , 
   useGetProductsQuery ,
   useGetOrdersQuery ,} = httpService



// class httpService{
//    constructor(){
//       axios.defaults.baseURL = API_BASE_URL

//       axios.interceptors.request.use((config)=>{
//          // config.headers!['test'] = 'Meee';
//          config.headers  = 'watch this';
//          return config 
//       },(error)=>{
//          return Promise.reject(error)
//       })

//       axios.interceptors.response.use((res)=>{
//       //  here we can cheac if the user is real or not backend will tell us
//          return res
//       }),(error)=>{
//          return Promise.reject(error)
//       }
//    }

//    get(url , config){
//       return axios.get(url , config )
//    }
//    post(url , data ,config){
//       return axios.post(url , data , config)
//    }
//    delete(url , config){
//       return axios.delete(url , config )
//    }
//    put(url ,  data ,  config){
//       return axios.put(url ,data, config )
//    }
//    patch(url ,  data ,  config){
//       return axios.patch(url ,data, config )
//    }
   
// }
// export default new httpService()