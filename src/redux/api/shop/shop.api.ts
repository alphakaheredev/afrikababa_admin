import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shop } from "./shop.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const ShopApi = createApi({
	reducerPath: "shopApi",
	tagTypes: ["shops", "products"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getShopsList: build.query<PaginationResults<Shop>, TypeQuery>({
			query: (query) => ({
				url: `shops`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["shops"],
		}),

		deleteShop: build.mutation<Shop, number>({
			query: (id) => ({
				url: `shops/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["shops"],
		}),

		toggleShopStatus: build.mutation<Shop, number>({
			query: (id) => ({
				url: `shops/${id}/toggle-status`,
				method: "GET",
			}),
			invalidatesTags: ["shops"],
		}),
	}),
});

export const {
	useGetShopsListQuery,
	useDeleteShopMutation,
	useToggleShopStatusMutation,
} = ShopApi;
