import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Shipping, ShippingCost, ShippingCostData } from "./shipping.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const ShippingApi = createApi({
	reducerPath: "shippingApi",
	tagTypes: ["shippings", "ordersByShipping"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getShippingsList: build.query<
			PaginationResults<Shipping>,
			TypeQuery
		>({
			query: (query) => ({
				url: `deliveries_batches`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["shippings"],
		}),

		deleteShipping: build.mutation<Shipping, number>({
			query: (id) => ({
				url: `deliveries_batches/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["shippings"],
		}),

		getOrdersByShipping: build.query<Shipping, number>({
			query: (id) => ({
				url: `deliveries_batches/${id}/orders`,
				method: "GET",
			}),
			providesTags: ["ordersByShipping"],
		}),

		getShippingCostsList: build.query<
			PaginationResults<ShippingCost>,
			TypeQuery
		>({
			query: (query) => ({
				url: `delivery_costs`,
				method: "GET",
				params: { ...query },
			}),
		}),

		createOrUpdateShippingCost: build.mutation<
			ShippingCost,
			{ id: number; data: ShippingCostData }
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `delivery_costs/${id}`,
						method: "PUT",
						body: data,
					};
				}
				return {
					url: `delivery_costs`,
					method: "POST",
					body: data,
				};
			},
		}),
	}),
});

export const {
	useGetShippingsListQuery,
	useDeleteShippingMutation,
	useGetOrdersByShippingQuery,
	useGetShippingCostsListQuery,
	useCreateOrUpdateShippingCostMutation,
} = ShippingApi;
