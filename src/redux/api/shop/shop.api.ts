import { createApi } from "@reduxjs/toolkit/query/react";
import { Shop, ShopFormData, ShopStats } from "./shop.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";
import { Payment } from "../payment/payment.type";
import { Order } from "../order/order.type";

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

		createOrUpdateShop: build.mutation<
			{ data: Shop },
			{ id: number; data: ShopFormData | FormData }
		>({
			query: ({ id, data }) => ({
				url: `shops${id ? `/${id}` : ""}`,
				method: id ? "PUT" : "POST",
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
				url: `boutique/my`,
				method: "GET",
			}),
		}),

		getShopStats: build.query<ShopStats, number>({
			query: (shop_id) => ({
				url: `/boutique/stats/${shop_id}`,
				method: "GET",
			}),
		}),

		getTransactionsByShop: build.query<
			PaginationResults<Payment>,
			TypeQuery
		>({
			query: (query) => ({
				url: `/transactions/shop`,
				method: "GET",
				params: { ...query },
			}),
		}),

		getOrdersByShop: build.query<PaginationResults<Order>, TypeQuery>({
			query: (query) => ({
				url: `/order-items/supplier`,
				method: "GET",
				params: { ...query },
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
	useLazyGetShopsByUserQuery,
	useCreateOrUpdateShopMutation,
	useGetShopStatsQuery,
} = ShopApi;
