import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order, OrderStatus } from "./order.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const OrderApi = createApi({
	reducerPath: "orderApi",
	tagTypes: ["orders"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
	endpoints: (build) => ({
		getOrdersList: build.query<PaginationResults<Order>, TypeQuery>({
			query: (query) => ({
				url: `orders`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["orders"],
		}),

		deleteOrder: build.mutation<Order, number>({
			query: (id) => ({
				url: `orders/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["orders"],
		}),

		updateOrderStatus: build.mutation<
			Order,
			{ id: number; status: OrderStatus }
		>({
			query: ({ id, status }) => ({
				url: `orders/${id}/status`,
				method: "PATCH",
				body: { status },
			}),
			invalidatesTags: ["orders"],
		}),

		changeOrderStatus: build.mutation<
			Order,
			{ id: number; status: OrderStatus }
		>({
			query: ({ id, status }) => ({
				url: `orders/${id}/status`,
				method: "GET",
				body: { status },
			}),
			invalidatesTags: ["orders"],
		}),
	}),
});

export const {
	useGetOrdersListQuery,
	useDeleteOrderMutation,
	useUpdateOrderStatusMutation,
	useChangeOrderStatusMutation,
} = OrderApi;
