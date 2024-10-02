import { createApi } from "@reduxjs/toolkit/query/react";
import { WindrawRequest, WindrawRequestFormData } from "./windraw.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const WindrawApi = createApi({
	reducerPath: "windrawApi",
	tagTypes: ["windraw"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getWindrawRequestsList: build.query<
			PaginationResults<WindrawRequest>,
			TypeQuery
		>({
			query: (query) => ({
				url: `withdraw_requests`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["windraw"],
		}),

		createOrUpdateWindrawRequest: build.mutation<
			WindrawRequest,
			{
				id?: number;
				data: WindrawRequestFormData;
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
			invalidatesTags: ["windraw"],
		}),

		deleteWindrawRequest: build.mutation<WindrawRequest, number>({
			query: (id) => ({
				url: `refund_requests/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["windraw"],
		}),
	}),
});

export const {
	useCreateOrUpdateWindrawRequestMutation,
	useGetWindrawRequestsListQuery,
	useDeleteWindrawRequestMutation,
} = WindrawApi;
