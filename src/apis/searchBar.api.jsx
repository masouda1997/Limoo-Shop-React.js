import { httpService } from "services/http.service";

export const searchBarApi = httpService.injectEndpoints({
	endpoints: (builder) => ({
      SearchData:builder.query({
         query:()=>`/products`
		}),
	}),
});

export const { useSearchDataQuery } = searchBarApi;