import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Refund, RefundFormData } from "./refund.type";
import { ApiBaseUrl } from "@/lib/http";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { prepareHeaders } from "../user/user.api";

export const RefundApi = createApi({
	reducerPath: "refundApi",
	tagTypes: ["refund"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${ApiBaseUrl}/api/`,
		prepareHeaders,
	}),
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
	}),
});

export const {
	useCreateOrUpdateRefundMutation,
	useGetRefundsListQuery,
	useDeleteRefundMutation,
} = RefundApi;
