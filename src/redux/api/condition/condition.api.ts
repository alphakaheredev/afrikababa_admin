import { createApi } from "@reduxjs/toolkit/query/react";
import { Condition, ConditionFormData } from "./condition.type";
import { PaginationResults, TypeQuery } from "@/lib/type";
import { baseQueryWithLogout } from "@/lib/baseQuery";

export const ConditionApi = createApi({
	reducerPath: "conditionApi",
	tagTypes: ["condition"],
	baseQuery: baseQueryWithLogout,
	endpoints: (build) => ({
		getConditionsList: build.query<
			PaginationResults<Condition>,
			TypeQuery
		>({
			query: (query) => ({
				url: `conditions`,
				method: "GET",
				params: { ...query },
			}),
			providesTags: ["condition"],
		}),

		createOrUpdateCondition: build.mutation<
			Condition,
			{
				id?: number;
				data: ConditionFormData;
			}
		>({
			query: ({ id, data }) => {
				if (id) {
					return {
						url: `conditions/${id}`,

						method: "PUT",
						body: data,
					};
				}
				return {
					url: `conditions`,
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["condition"],
		}),

		deleteCondition: build.mutation<Condition, number>({
			query: (id) => ({
				url: `conditions/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["condition"],
		}),
	}),
});

export const {
	useCreateOrUpdateConditionMutation,
	useGetConditionsListQuery,
	useDeleteConditionMutation,
} = ConditionApi;
