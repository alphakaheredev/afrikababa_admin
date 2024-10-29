import { createApi } from "@reduxjs/toolkit/query/react";
import { Shop, ShopFormData } from "./shop.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const ShopApi = createApi({
	reducerPath: "shopApi",
	tagTypes: ["shops", "products"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getShopsList: build.query<PaginationResults<Shop>, TypeQuery>({
			query: (query) => ({
				url: `shops`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["shops"],
		}),

		createShop: build.mutation<Shop, ShopFormData>({
			query: (data) => ({
				url: `shops`,
				method: "POST",
				body: data,
			}),
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

		getShopsByUser: build.query<Shop[], void>({
			query: () => ({
				url: `shops/my-shops`,
				method: "GET",
			}),
		}),
	}),
});

export const {
	useGetShopsListQuery,
	useDeleteShopMutation,
	useToggleShopStatusMutation,
	useCreateShopMutation,
	useGetShopsByUserQuery,
} = ShopApi;
