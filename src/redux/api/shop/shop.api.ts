import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Shop } from "./shop.type";
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
			query: (slug) => ({
				url: `shops/${slug}`,
				method: "DELETE",
			}),
			invalidatesTags: ["shops"],
		}),
		getProductsList: build.query<PaginationResults<Product>, TypeQuery>(
			{
				query: (query) => ({
					url: `products`,
					method: "GET",
					params: { ...query },
				}),
				providesTags: ["products"],
			}
		),

		deleteProduct: build.mutation<Product, number>({
			query: (slug) => ({
				url: `products/${slug}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetShopsListQuery,
	useDeleteShopMutation,
	useGetProductsListQuery,
	useDeleteProductMutation,
} = ShopApi;
