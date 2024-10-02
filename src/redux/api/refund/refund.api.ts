import { createApi } from "@reduxjs/toolkit/query/react";
import { Refund, RefundFormData, RefundStatus } from "./refund.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const RefundApi = createApi({
	reducerPath: "refundApi",
	tagTypes: ["refund"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getRefundsList: build.query<PaginationResults<Refund>, TypeQuery>({
			query: (query) => ({
				url: `refund_requests`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["refund"],
		}),

		createOrUpdateRefund: build.mutation<
			Refund,
			{
				id?: number;
				data: RefundFormData;
			}
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `refund_requests/${id}`,

						method: "PUT",
						body: data,
					};
				}
				return {
					url: `refund_requests`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["refund"],
		}),

		deleteRefund: build.mutation<Refund, number>({
			query: (id) => ({
				url: `refund_requests/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["refund"],
		}),

		changeRefundStatus: build.mutation<
			Refund,
			{ id: number; status: RefundStatus }
		>({
			query: ({ id, status }) => ({
				url: `refund_requests/update/${id}`,
				method: "POST",
				body: { status },
			}),
			invalidatesTags: ["refund"],
		}),
	}),
});

export const {
	useCreateOrUpdateRefundMutation,
	useGetRefundsListQuery,
	useDeleteRefundMutation,
	useChangeRefundStatusMutation,
} = RefundApi;
