import { createApi } from "@reduxjs/toolkit/query/react";
import { Order, OrderQuery, OrderStatus } from "./order.type";
import { PaginationResults } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const OrderApi = createApi({
	reducerPath: "orderApi",
	tagTypes: ["orders"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getOrdersList: build.query<PaginationResults<Order>, OrderQuery>({
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
				method: "POST",
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
